function addSelectionToFile() {
    // 選択範囲を取得する
    const editor = vscode.window.activeTextEditor;
    const selection = editor.selection;
  
    // 選択範囲を文字列に変換する
    const text = editor.document.getText(selection);
  
    // 文字列を別ファイルに書き込む
    fs.writeFileSync("output.txt", text);
  }