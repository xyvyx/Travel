---
name: travel-diary-sync
description: >
  Syncs an uploaded zip export from the xyvyx/Travel repo's Obsidian diary
  vault (a date-named folder like 2026-06-06/ containing main.md plus
  photos/videos, sometimes with an index.md_UPDATED root-index update) into
  the xyvyx/Travel git repo and pushes to master. Use this whenever the
  user uploads a zip and asks to push/commit it to Git, says things like
  "Gitにプッシュしてください", "日記を追加して", "旅行記録をリポジトリに反映して",
  or references a travel/diary entry export — even if they just say "これを
  リポジトリに入れて" without naming the skill. Handles duplicate-detection
  (the same content may already be pushed from an earlier session),
  preserves the exact folder structure on copy, and never commits the raw
  .zip file itself. Do not use this for unrelated zip files or other repos.
---

# Travel diary zip → xyvyx/Travel sync

## What this is for

The user keeps a personal travel/life-log diary as an Obsidian vault, mirrored
in the `xyvyx/Travel` GitHub repo. Each entry is a top-level folder named
`YYYY-MM-DD/` containing a `main.md` write-up and the photos/videos it
references. `index.md` at the repo root links every entry
(`[YYYY-MM-DD_場所名](./YYYY-MM-DD/main.md)`).

The user periodically exports one diary entry from Obsidian as a zip and
asks to have it pushed to Git. The zip is a workspace artifact, not a repo
artifact — it should never be committed as-is. What matters is the folder(s)
and files inside it, copied into the repo tree exactly as they're named and
nested.

## Why the dry-run-first shape matters

The same zip sometimes gets uploaded more than once (e.g. a backup copy, or
because a previous session already pushed it). Committing it again would
create a redundant/no-op commit and clutter the history. So the workflow
always **compares before it copies**, and only touches the working tree for
files that are actually new or different.

## Steps

1. **Locate and extract the zip.** It's typically under
   `/root/.claude/uploads/<session-id>/...`. Extract it — don't inspect it
   as a zip archive or push it in that form.

2. **Diff against the repo (dry run).** Run the bundled script:

   ```
   python3 .claude/skills/travel-diary-sync/scripts/sync_zip.py <zip_path> <repo_root>
   ```

   This extracts to a scratch directory and reports, per file, `NEW`,
   `CHANGED`, or `SAME` — by content hash, not just filename — against
   what's currently in the working tree. It also understands the
   `index.md_UPDATED`-style convention: a top-level file ending in
   `_UPDATED` is compared against the same path with that suffix stripped
   (e.g. `index.md_UPDATED` → `index.md`).

   Also check the comparison isn't fooled by branch state: confirm what
   `origin/master` actually has (`git log origin/master`, `git show
   origin/master:<path> | diff - <local path>`), since the local checkout
   may be on a different branch than master. If everything in the zip is
   `SAME` and `origin/master` already contains it (e.g. HEAD is already an
   ancestor of, or equal to, origin/master), there's nothing to do — report
   that plainly and stop. Don't force a commit just to have done something.

3. **If anything is NEW or CHANGED, decide the commit message before
   copying.** Look at `git log --oneline` for the existing style — it's
   consistently `Add YYYY-MM-DD <place> trip` in Japanese place names, e.g.
   `Add 2026-06-06 宇都宮城 trip`. The most reliable source for `<place>` is
   the new/changed line in `index.md_UPDATED` (its link text is
   `YYYY-MM-DD_場所名`) — diff it against the current `index.md` to find the
   added line. If there's no `index.md_UPDATED` in this zip, fall back to
   the `# タイトル` heading or first `##` heading in the entry's `main.md`,
   or just the date folder name if nothing better is available. If the
   change is an update to an *existing* entry rather than a brand-new one,
   write the message accordingly (e.g. `Update YYYY-MM-DD <place> photos`)
   rather than reusing "Add" — match the intent of the diff, not just the
   template.

4. **Apply the copy.** Re-run the same script with `--apply`:

   ```
   python3 .claude/skills/travel-diary-sync/scripts/sync_zip.py <zip_path> <repo_root> --apply
   ```

   This copies every NEW/CHANGED file to its target path, preserving the
   folder structure and filenames exactly as extracted, and creates any
   needed directories. It deliberately does not run `git add` — do that
   yourself so you can see exactly what's staged. The user has said not to
   pause for confirmation before overwriting an existing same-dated entry
   that differs (e.g. re-exported photos, a corrected write-up) — just
   overwrite and commit, but always say clearly in your final report which
   files were added vs. which existing files were overwritten, so it's
   never a silent change.

5. **Commit and push to `master`.** This repo's default branch is `master`
   (there is no `main`; other branches like `gh-pages`, `test`, `B1` exist
   but are never the target here). The harness may have checked out a
   differently-named working branch for the session — that's fine; push
   straight to the remote master ref. Prefer the GitHub MCP tools
   (`mcp__github__push_files` / `create_or_update_file`) over a raw
   `git push` — this environment routes GitHub writes through the
   connected GitHub App, and a plain `git push` (even a locally-made
   commit) will typically 403 since no local git credential is configured.
   When using `push_files`, base the change on the *current* remote HEAD
   content (re-fetch/re-read the target file first if you're updating
   rather than adding) so you don't clobber a real file with stale or
   placeholder content — always read back what you just pushed to confirm
   it matches what you intended.

   If a write attempt returns `403 Resource not accessible by integration`
   (as opposed to a plain 403 with no such message), that's not a retryable
   auth hiccup — it means the GitHub App connection for this repo/org isn't
   installed or authorized. Retrying the same call, minting a new PAT, or
   trying raw `git push` with a token all hit the same wall, because this
   environment's egress proxy gates GitHub writes on the App's installation
   status before the request reaches GitHub at all. Don't loop on it — stop
   and tell the user to fix the connection at
   https://github.com/apps/claude/installations/select_target (org admin
   install) or https://claude.ai/customize/connectors?auth_start=github&auth_start_force=1
   (reconnect), then retry once they confirm.

6. **Never commit the raw zip**, the scratch extraction directory, or any
   `*_UPDATED`-suffixed filename (only its de-suffixed target should land
   in the repo).

7. **Credentials in the request.** If the user's message includes what
   looks like a plaintext GitHub token/PAT/password, don't use it by
   default — warn the user once that the credential is now exposed in the
   conversation and should be revoked/rotated, and never echo it back.
   Only fall back to a user-supplied token, with their explicit go-ahead,
   if the sanctioned GitHub MCP tools are confirmed blocked for a reason
   that isn't just "App not installed" (see step 5) — a token can't fix
   that specific error, so don't burn one testing it against that error.

8. **Report in Japanese**, since that's how the user communicates about
   this repo. Summarize: what was compared, what (if anything) was added
   vs. overwritten, the commit message and hash, and confirmation it's on
   `master`. If nothing needed pushing, say so plainly instead of
   describing a no-op as if it were an action.
