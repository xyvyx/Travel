---
title: '# xxxxxxxxx には、実際の仮想マシン名、サービス名を指定してください。'
updated: 2017-06-09 13:46:09Z
created: 2017-06-09 13:46:09Z
author: xyvyx10@gmail.com
---

# xxxxxxxxx には、実際の仮想マシン名、サービス名を指定してください。

# 仮想マシンの起動

Start-AzureVM -Name DBIAX12R271 -ServiceName DBIAX12R271

# 結果を変数に格納

$azurevminfo = (Get-AzureVM -Name DBIAX12R271 -ServiceName DBIAX12R271)

# 仮想マシンの状態が、開始中の間は、下記の処理を継続

while ( $azurevminfo.PowerState -eq "Starting")
{
    # 30秒スリープ。もっといい方法を後で考える
    Start-Sleep -s 30
    # 結果を変数に格納
    $azurevminfo = (Get-AzureVM -Name DBIAX12R271 -ServiceName DBIAX12R271)
}

# 仮想マシンに接続するための、RDPファイルを取得し、ローカルに格納

Get-AzureRemoteDesktopFile -LocalPath C:\azure.rdp -Name DBIAX12R271 -ServiceName DBIAX12R271

# リモートデスクトップを起動

Start-Process -FilePath mstsc C:\azure.rdp

DBIAX12R271.cloudapp.net:60794

Get-AzureVM

DBIAX12R271

DBIAX12R272
DBIAX12R271

# xxxxxxxxx には、実際の仮想マシン名、サービス名を指定してください。

# 仮想マシンの起動

Start-AzureVM -Name xxxxxxxxx -ServiceName xxxxxxxxx

# 結果を変数に格納

$azurevminfo = (Get-AzureVM -Name xxxxxxxxx -ServiceName xxxxxxxxx)

# 仮想マシンの状態が、開始中の間は、下記の処理を継続

while ( $azurevminfo.PowerState -eq "Starting")
{
    # 30秒スリープ。もっといい方法を後で考える
    Start-Sleep -s 30
    # 結果を変数に格納
    $azurevminfo = (Get-AzureVM -Name xxxxxxxxx -ServiceName xxxxxxxxx)
}

# 仮想マシンに接続するための、RDPファイルを取得し、ローカルに格納

Get-AzureRemoteDesktopFile -LocalPath C:\azure.rdp -Name xxxxxxxxx -ServiceName xxxxxxxxx

# リモートデスクトップを起動

Start-Process -FilePath mstsc C:\azure.rdp

processReport

     populateGeneralJournalEntry()

     generalJournalEntry
          CtiTransferSlipRedIdTemp
               GeneraljournalAccountEntry
                    Taxのみ

     dfiTransferSlipTemp

generalJournalEntry.JournalCategor

exchangeRate

CurrencyCode

Initialize_AXModelStore -AOSAccount "Contoso\AxAOS" -SchemaName Test -Server AXTest -Database Test1

Initialize_AXModelStore -AOSAccount "R2" -SchemaName DBIAX12R271 -Server DBIAX12R271 -Database MicrosoftDynamicsAX_model

Initialize_AXModelStore -AOSAccount "R2" -SchemaName DBIAX12R271 -Server DBIAX12R271 -Database MicrosoftDynamicsAX_model