#!/usr/bin/env python3
"""
Diff and (optionally) apply the contents of an uploaded travel-diary zip
against the xyvyx/Travel working tree.

Two-phase by design:
  1. Dry run (default): extract the zip and report, per file, whether it is
     NEW, CHANGED, or SAME relative to what's already in the repo. Nothing
     is written to the repo in this phase.
  2. Apply (--apply): copy every NEW/CHANGED file into the repo at its
     target path, creating directories as needed. SAME files are left
     alone. Nothing is staged with `git add` here on purpose -- the
     caller decides what to stage and how to commit.

Why two phases: the commit message for this repo names the place visited
(e.g. "Add 2026-06-06 宇都宮城 trip"), and that name is best read out of the
*_UPDATED index file's diff, not guessed by this script. So the dry run
gives a human (or the model driving this skill) enough to write a good
commit message and sanity-check the change before anything touches the
working tree.

Naming convention handled specially: any top-level file whose name ends in
"_UPDATED" (e.g. "index.md_UPDATED") is treated as a replacement for the
same path with that suffix stripped (e.g. "index.md"). This matches how
the Obsidian export produces updated root files without clobbering the
original during unzip.
"""
import argparse
import hashlib
import json
import shutil
import sys
import zipfile
from pathlib import Path

JUNK_NAMES = {"__MACOSX", ".DS_Store", "Thumbs.db", "desktop.ini"}
UPDATED_SUFFIX = "_UPDATED"


def sha256_of(path: Path) -> str:
    h = hashlib.sha256()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(1 << 20), b""):
            h.update(chunk)
    return h.hexdigest()


def target_rel_for(rel: Path) -> Path:
    """Map an extracted relative path to its repo target path, handling
    the _UPDATED convention on the final path component."""
    if rel.name.endswith(UPDATED_SUFFIX):
        return rel.with_name(rel.name[: -len(UPDATED_SUFFIX)])
    return rel


def is_junk(rel: Path) -> bool:
    return any(part in JUNK_NAMES for part in rel.parts)


def extract(zip_path: Path, extract_dir: Path) -> None:
    if extract_dir.exists():
        shutil.rmtree(extract_dir)
    extract_dir.mkdir(parents=True)
    with zipfile.ZipFile(zip_path) as zf:
        zf.extractall(extract_dir)


def build_report(extract_dir: Path, repo_root: Path):
    entries = []
    for source in sorted(extract_dir.rglob("*")):
        if not source.is_file():
            continue
        rel = source.relative_to(extract_dir)
        if is_junk(rel):
            continue
        target_rel = target_rel_for(rel)
        target = repo_root / target_rel
        source_hash = sha256_of(source)
        if target.exists():
            target_hash = sha256_of(target)
            status = "SAME" if source_hash == target_hash else "CHANGED"
        else:
            target_hash = None
            status = "NEW"
        entries.append(
            {
                "source": str(source),
                "extracted_rel": str(rel),
                "target_rel": str(target_rel),
                "status": status,
                "source_sha256": source_hash,
                "target_sha256": target_hash,
            }
        )
    return entries


def apply_report(entries, repo_root: Path):
    copied = []
    for e in entries:
        if e["status"] not in ("NEW", "CHANGED"):
            continue
        source = Path(e["source"])
        target = repo_root / e["target_rel"]
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, target)
        copied.append(e["target_rel"])
    return copied


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("zip_path", type=Path)
    ap.add_argument("repo_root", type=Path)
    ap.add_argument(
        "--extract-dir",
        type=Path,
        default=None,
        help="Where to extract the zip (default: alongside the zip, as <zip>_extracted)",
    )
    ap.add_argument(
        "--apply",
        action="store_true",
        help="Actually copy NEW/CHANGED files into repo_root. Without this flag, only report.",
    )
    args = ap.parse_args()

    zip_path = args.zip_path.resolve()
    repo_root = args.repo_root.resolve()
    extract_dir = (
        args.extract_dir.resolve()
        if args.extract_dir
        else zip_path.parent / (zip_path.stem + "_extracted")
    )

    extract(zip_path, extract_dir)
    entries = build_report(extract_dir, repo_root)

    result = {
        "extract_dir": str(extract_dir),
        "repo_root": str(repo_root),
        "counts": {
            "new": sum(1 for e in entries if e["status"] == "NEW"),
            "changed": sum(1 for e in entries if e["status"] == "CHANGED"),
            "same": sum(1 for e in entries if e["status"] == "SAME"),
        },
        "entries": entries,
    }

    if args.apply:
        result["copied"] = apply_report(entries, repo_root)

    json.dump(result, sys.stdout, ensure_ascii=False, indent=2)
    print()


if __name__ == "__main__":
    main()
