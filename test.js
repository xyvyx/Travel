const vscode = require('vscode');

/**
 * マクロコンフィギュレーション(環境に合わせてお好みで設定)
 */
module.exports.macroCommands = {
    'カナ→ヘボン式ローマ字': {
        no: 1,
        func: toHepburn
    },
    ShowFileList: {
        no: 2,
        func: listFiles,
    },
    TSV2SQLInsert: {
        no: 3,
        func: TSV2SQLInsert,
      },
      Maplist2csv: {
        no: 3,
        func: Maplist2csv,
      },
      removeDupLines: {
        no: 3,
        func: removeDupLines,
      },
};

async function toHepburn() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return 'Editor is not open.';
    }

    // 選択範囲のテキストを取得
    const document = editor.document;
    const selection = editor.selection;
    const text = document.getText(selection);

    let kanaText = '';
    if (text.length) {
        kanaText = text;
    } else {
        kanaText = await vscode.window.showInputBox({ title: 'ローマ字変換する文字を全角カナで入力' });
        if (!kanaText) {
            return '';
        }
    }

    const romaji = kanaToHepburnRomanization(kanaText);

    editor.edit(editBuilder => {
        // 処理結果を選択範囲に書き戻す
        editBuilder.replace(selection, romaji);
    });
}

function kanaToHepburnRomanization(kana) {
    const kanaHepburnMap = {
        'ア': 'a', 'イ': 'i', 'ウ': 'u', 'エ': 'e', 'オ': 'o',
        'カ': 'ka', 'キ': 'ki', 'ク': 'ku', 'ケ': 'ke', 'コ': 'ko',
        'サ': 'sa', 'シ': 'shi', 'ス': 'su', 'セ': 'se', 'ソ': 'so',
        'タ': 'ta', 'チ': 'chi', 'ツ': 'tsu', 'テ': 'te', 'ト': 'to',
        'ナ': 'na', 'ニ': 'ni', 'ヌ': 'nu', 'ネ': 'ne', 'ノ': 'no',
        'ハ': 'ha', 'ヒ': 'hi', 'フ': 'fu', 'ヘ': 'he', 'ホ': 'ho',
        'マ': 'ma', 'ミ': 'mi', 'ム': 'mu', 'メ': 'me', 'モ': 'mo',
        'ヤ': 'ya', 'ユ': 'yu', 'ヨ': 'yo',
        'ラ': 'ra', 'リ': 'ri', 'ル': 'ru', 'レ': 're', 'ロ': 'ro',
        'ワ': 'wa', 'ヰ': 'i', 'ヱ': 'e', 'ヲ': 'o', 'ン': 'n',
        'ガ': 'ga', 'ギ': 'gi', 'グ': 'gu', 'ゲ': 'ge', 'ゴ': 'go',
        'ザ': 'za', 'ジ': 'ji', 'ズ': 'zu', 'ゼ': 'ze', 'ゾ': 'zo',
        'ダ': 'da', 'ヂ': 'ji', 'ヅ': 'zu', 'デ': 'de', 'ド': 'do',
        'バ': 'ba', 'ビ': 'bi', 'ブ': 'bu', 'ベ': 'be', 'ボ': 'bo',
        'パ': 'pa', 'ピ': 'pi', 'プ': 'pu', 'ペ': 'pe', 'ポ': 'po',
        'キャ': 'kya', 'キュ': 'kyu', 'キョ': 'kyo',
        'シャ': 'sha', 'シュ': 'shu', 'ショ': 'sho',
        'チャ': 'cha', 'チュ': 'chu', 'チョ': 'cho',
        'ニャ': 'nya', 'ニュ': 'nyu', 'ニョ': 'nyo',
        'ヒャ': 'hya', 'ヒュ': 'hyu', 'ヒョ': 'hyo',
        'ミャ': 'mya', 'ミュ': 'myu', 'ミョ': 'myo',
        'リャ': 'rya', 'リュ': 'ryu', 'リョ': 'ryo',
        'ギャ': 'gya', 'ギュ': 'gyu', 'ギョ': 'gyo',
        'ジャ': 'ja', 'ジュ': 'ju', 'ジョ': 'jo',
        'ビャ': 'bya', 'ビュ': 'byu', 'ビョ': 'byo',
        'ピャ': 'pya', 'ピュ': 'pyu', 'ピョ': 'pyo',
        'シェ': 'she', 'チェ': 'che', 'ティ': 'ti', 'ニィ': 'ni', 'ニェ': 'nye',
        'ファ': 'fa', 'フィ': 'fi', 'フェ': 'fe', 'フォ': 'fo', 'ジェ': 'je',
        'ディ': 'di', 'デュ': 'dyu', 'ウィ': 'wi', 'ウェ': 'we', 'ウォ': 'wo',
        'ヴァ': 'va', 'ヴィ': 'vi', 'ヴェ': 've', 'ヴォ': 'vo',
        'ー': ''
    };

    function getRomaji(t) {
        return kanaHepburnMap[t] ?? '';
    }

    let romaji = '';
    for (let i = 0; i < kana.length; i++) {

        const currentChar = kana[i]
        const nextChar = kana[i + 1] ?? '';

        if (currentChar === 'ン') {
            // 撥音
            if (['バ', 'ビ', 'ブ', 'ベ', 'ボ', 'パ', 'ピ', 'プ', 'ペ', 'ポ', 'マ', 'ミ', 'ム', 'メ', 'モ'].includes(nextChar)) {
                // ：B/M/Pの前の「ん」はMで表現
                romaji += 'm';
            } else {
                // nで表現
                romaji += 'n';
            }
        } else if (currentChar === 'ッ') {
            // 促音
            if (['チ', 'チャ', 'チュ', 'チョ'].includes(nextChar)) {
                // チ(chi)/チャ(cha)/チュ(chu)/チョ(cho)の場合はtを付加
                romaji += 't';
            } else {
                // 子音を重ねる
                romaji += getRomaji(nextChar)[0] ?? '';
            }
        }
        else {
            // 撥音・促音以外
            let hepburn = getRomaji(currentChar + nextChar);
            if (hepburn && nextChar) {
                // 2文字処理した場合は次の文字をスキップ
                ++i;
            } else {
                // そのまま出力
                hepburn = getRomaji(currentChar);
            }
            romaji += hepburn;
        }
    }

    // 「オ」を含む長音オオ(oo)の場合はoを重ねない
    romaji = romaji.replace(/oo(?!$)/g, 'o');
    // 「ウ」を含む長音ウウ(uu))の場合はuを重ねない
    romaji = romaji.replace(/uu/g, 'u');
    // 「オウ」音でヨミカタが「ウ」の場合uを付加しない
    romaji = romaji.replace(/ou/g, 'o');

    return romaji;
}

// const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

/**
 * マクロコンフィギュレーション
 */

/**
module.exports.macroCommands = {
    ShowFileList: {
        no: 2,
        func: listFiles,
    },
};
 */

/**
 * ファイル一覧表示
 */
async function listFiles() {

    let targetDirPath = '';
    if (vscode.workspace.workspaceFolders !== undefined &&
        vscode.workspace.workspaceFolders.length === 1) {
        // 初期ディレクトリパスをターゲットディレクトリパスに設定
        targetDirPath = vscode.workspace.workspaceFolders[0].uri.fsPath;
    }

    targetDirPath = await vscode.window.showInputBox({
        placeHolder: 'Enter the directory path to show the file list.',
        ignoreFocusOut: true,
        value: targetDirPath
    });

    if (targetDirPath === undefined || targetDirPath.length === 0)
        return;

    if (!fs.existsSync(targetDirPath)) {
        await vscode.window.showErrorMessage('Directory does not exist.');
    }

    let filePaths = [];
    findFiles(targetDirPath, filePaths);

    const sqlDoc = await vscode.workspace.openTextDocument({
        language: 'plaintext',
        content: filePaths.join('\r\n')
    });
    await vscode.window.showTextDocument(sqlDoc);
}

function findFiles(dirPath, files) {

    let dirItems = fs.readdirSync(dirPath, {
        withFileTypes: true
    });
    dirItems.sort((f1, f2) => {
        // ファイル → ディレクトリ
        const isDir1 = f1.isDirectory();
        const isDir2 = f2.isDirectory();
        if (!isDir1 && isDir2) return -1;
        if (isDir1 && !isDir2) return 1;
        // ファイル(ディレクトリ)名昇順
        const lower1 = f1.name.toLowerCase();
        const lower2 = f2.name.toLowerCase();
        if (lower1 < lower2) return -1;
        if (lower1 > lower2) return 1;

        return 0;
    });

    dirItems.forEach(element => {
        const fullPath = path.join(dirPath, element.name);
        files.push(fullPath);
        if (element.isDirectory()) {
            findFiles(fullPath, files);
        }
    });
}

/**const vscode = require('vscode');

/**
 * マクロコンフィギュレーション
 */

/**
 * TSVからSQL Insert文を作成
 */
async function TSV2SQLInsert() {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return 'Editor is not opening.';
  }
  const document = editor.document;
  const selection = editor.selection;

  // 改行コード
  const eol = {
    1: '\n',
    2: '\r\n',
  }[document.eol];
  // DBの列のデータ型(0:text, 1:number)
  const dbColumnTypes = [0, 1, 1, 0];

  // 選択範囲のテキストを改行コードで分割
  const tsvRows = document.getText(selection).split(eol);
  let sqlRows = [];

  tsvRows.forEach((row) => {
    if (row.length > 0) {
      // Split line
      const columnValues = row.split('\t').map((s, i) => {
        if (dbColumnTypes[i] === 0)
          // 値が文字列型のときはシングルクォートで囲む
          return `'${s}'`;
        else return s;
      });
      const sql = `INSERT INTO XXX_TBL VALUES(${columnValues.join(',')});`;
      sqlRows.push(sql);
    }
  });

  const sqlDoc = await vscode.workspace.openTextDocument({
    language: 'SQL',
    content: sqlRows.join(eol),
  });
  await vscode.window.showTextDocument(sqlDoc);
}

/**
 * MapのリストからCSVを作成
 */
async function Maplist2csv() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return 'Editor is not opening.';
    }
    const document = editor.document;
    const selection = editor.selection;
  
    // 改行コード
    const eol = {
      1: '\n',
      2: '\r\n',
    }[document.eol];
    // DBの列のデータ型(0:text, 1:number)
    const dbColumnTypes = [0, 1, 1, 0];
  
    // 選択範囲のテキストを改行コードで分割
    const tsvRows = document.getText(selection).split(eol);
    let sqlRows = [];
  
    tsvRows.forEach((row) => {
        if (row.length > 0) {
          // Split line
          const columnValues = row.split(' ').map((s, i) => {
            if (dbColumnTypes[i] === 0)
              // 値が文字列型のときはシングルクォートで囲む
              return `'${s}'`;
            else return s;
          });
         const sql = columnValues.join(',');
        //  const sql = `INSERT` ;
          sqlRows.push(sql);
        }
      });
  
    const sqlDoc = await vscode.workspace.openTextDocument({
      language: 'SQL',
      content: sqlRows.join(eol),
    });
    await vscode.window.showTextDocument(sqlDoc);
  }

  /**
 * 重複行の削除マクロ
 */
function removeDupLines() {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      return 'Editor is not opening.';
    }
    // 選択範囲のテキストを取得
    const document = editor.document;
    const selection = editor.selection;
    const text = document.getText(selection);
    if (text.length > 0) {
      // ドキュメントのEOL記号
      const documentEOL = {
        1: '\n',
        2: '\r\n'
      } [document.eol];
      // 行で配列化
      const selectedLines = text.split(documentEOL);
      // 重複行のマーク
      const appeared = new Set();
      const uniqueLines = selectedLines.map((lineText, rowIndex) => {
        if (lineText.length > 0 && appeared.has(lineText)) {
          return {
            text: lineText,
            row: -1
          };
        }
        appeared.add(lineText);
        return {
          text: lineText,
          row: rowIndex
        };
      });
  
      editor.edit(editBuilder => {
        // 重複行を除いたテキストを選択範囲に書き戻す
        const replaced = uniqueLines
          .filter((value) => value.row > -1)
          .map((value) => value.text)
          .join(documentEOL);
        editBuilder.replace(selection, replaced);
      });
    }
  }