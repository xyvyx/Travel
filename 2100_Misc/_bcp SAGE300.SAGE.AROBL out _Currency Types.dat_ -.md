---
title: '#bcp SAGE300.SAGE.AROBL out "Currency Types.dat" -T -c'
updated: 2017-06-09 13:46:06Z
created: 2017-06-09 13:46:06Z
author: xyvyx10@gmail.com
---

#bcp SAGE300.SAGE.AROBL out "Currency Types.dat" -T -c

[System.Data.SqlClient.SqlConnection]$objConnection = $null;
[System.Data.SqlClient.SqlCommand]$objCommand       = $null;
[System.Data.SqlClient.SqlDataAdapter]$objAdapter   = $null;
[System.Data.DataSet]$objDataset = $null;
[System.Data.DataTable]$objTable = $null;
[string]$strServer = '';
[string]$strInstance = '';
[string]$strDatabase = '';
[string]$strUserId   = '';
[string]$strPassword = '';
[string]$strSQL = '';
[string]$strConnectionString  = '';

$strServer   = 'SAGE300'; #サーバーを指定
$strInstance = 'SAGE';#インスタンスを指定
$strDatabase = 'SAMINC';    #データベースを指定
$strUserId   = 'sage';        #ユーザーIDを指定
$strPassword = 'pass[word1';  #パスワードを指定

#実行するSQL
$strSQL = 'SELECT * FROM dbo.ITEM_LIST ORDER BY ID;';

#接続文字列を作成
#SQL Server 認証をする場合はユーザーIDとパスワードの記述が必要
$strConnectionString = @"
Data Source=$strServer\$strInstance;
Initial Catalog=$strDatabase;
User ID=$strUserId;
Password=$strPassword;
"@

$objConnection = New-Object -TypeName System.Data.SqlClient.SqlConnection;
$objConnection.ConnectionString = $strConnectionString;
$objCommand = $objConnection.CreateCommand();
$objCommand.CommandText = $strSQL;

$objAdapter = New-Object -TypeName System.Data.SqlClient.SqlDataAdapter $objCommand;

$objDataset = New-Object -TypeName System.Data.DataSet;

#データセットにCommandTextの実行結果をセット
#戻り値の数値は不要の為、[void]をつけている。
[void]$objAdapter.Fill($objDataset);

#DataSetにセットされた1個目のテーブルを取り出す
$objTable = $objDataset.Tables[0];

Write-Host '***** データの１行目を表示 *****';
if($objTable.Rows.Count -gt 0){
  Write-Host ('1行目のID   ：' + $objTable.Rows[0].Item('ID'));
  Write-Host ('1行目のNAME ：' + $objTable.Rows[0].Item('NAME'));
  Write-Host ('1行目のPRICE：' + $objTable.Rows[0].Item('PRICE'));
}else{
  Write-Host 'データはありません。';
}

Write-Host '***** データを全件ループして表示 *****';
foreach($objRow in $objTable.Rows){
  Write-Host ('ID:'     + $objRow.Item('ID') + `
              '、名前:' + $objRow.Item('NAME') + `
              '、価格:' + $objRow.Item('PRICE'));
}

#各種リソースの破棄
$objConnection.Close();
$objConnection.Dispose();
$objCommand.Dispose();
$objDataset.Dispose();
$objAdapter.Dispose();

  }