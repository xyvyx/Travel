---
title: PowerShell 3.0 で作る Hyper-V 仮想マシンと基本設定
updated: 2015-11-19 01:00:23Z
created: 2015-11-19 01:00:23Z
source: http://www.vwnet.jp/Windows/WS12/VMconfPS3/ConfigVMbyPS3.htm
tags:
  - SI
---

[Home](http://www.vwnet.jp/) >[Windows にまつわる e.t.c](http://www.vwnet.jp/Windows/etc.asp).

# PowerShell 3.0 で作る Hyper-V 仮想マシンと基本設定

* * *

Windows Server 2012 / Windows 8 の Power Shell 3.0 は、大幅に進化しており netsh とか、WMI を使わず、大半を PowerShell のコマンドレットで仮想マシンの作成や、仮想マシンそのもの設定が可能です。

Sysprep してあるベース VHDX から、差分ディスクで Windows Server 2012 の仮想マシンを作成し、IPv4 / IPv6、コンピューター名の設定、ライセンス登録、ドメイン参加をするシナリオで、これらを解説しましょう。

< 例で使用する環境 >
● ベースとなる VHDX(sysprep済み)
F:\Hyper-V\VHD\BaseWS12.VHDX
● 仮想マシン名
TestVM01
● 作成する仮想マシン置き場
F:\Hyper-V\TestVM01\
TestVM01.VHDX
● 使用する仮想SW
LAN

まずは、仮想マシンの作成です。
**仮想マシン作成テンプレート**

|     |
| --- |
| # 仮想マシン置き場作成<br>md [仮想マシン置き場]<br># 差分ディスク作成<br>New-VHD -ParentPath [ベースとなる VHDX] -Path [作成する差分ディスク] -Differencing<br># 仮想マシン作成<br>New-VM -Name [仮想マシン名] -Path [仮想マシン置き場] -VHDPath [VHDXの場所] -SwitchName [仮想SW名]<br># ダイナミックメモリ有効<br>Set-VMMemory [仮想マシン名] -DynamicMemoryEnabled $true<br># 仮想CPU割り当て<br>Set-VMProcessor [仮想マシン名] -Count [仮想CPU数]<br># 仮想マシン起動<br>Start-VM -Name [仮想マシン名] |

**仮想マシン作成例(要管理権限)**

|     |
| --- |
| # 仮想マシン置き場作成<br>md **F:\Hyper-V\TestVM01<br>**# 差分ディスク作成<br>New-VHD -ParentPath **F:\Hyper-V\VHD\BaseWS12.VHDX** -Path **F:\Hyper-V\TestVM01\TestVM01.VHDX** -Differencing<br># 仮想マシン作成<br>New-VM -Name **TestVM01** -Path **F:\Hyper-V\TestVM01** -VHDPath **F:\Hyper-V\TestVM01\TestVM01.VHDX** -SwitchName **LAN<br>**# ダイナミックメモリ有効<br>Set-VMMemory **TestVM01** -DynamicMemoryEnabled $true<br># 仮想CPU割り当て<br>Set-VMProcessor **TestVM01** -Count **2<br>**# 仮想マシン起動<br>Start-VM -Name **TestVM01** |

仮想マシンが起動したら、仮想マシンのセットアップをします。
自動応答を仕込んでいない場合は、仮想マシンの GUI 入力が必要なので、「**vmconnect**」で仮想マシンの GUI に接続し、必要な入力をします。

続いて、仮想マシンの Power Shell で、IPアドレスとコンピューター名の設定します。

**仮想マシンのIPアドレス、コンピューター名設定テンプレート**

|     |
| --- |
| # RA による IPv6 アドレス自動構成停止<br>Set-NetIPInterface -RouterDiscovery Disabled<br># IPv6 アドレス設定(/64)<br>Get-NetAdapter \| New-NetIPAddress -AddressFamily IPv6 -IPAddress [IPv6 GUA アドレス] -PrefixLength 64<br>Get-NetAdapter \| New-NetIPAddress -AddressFamily IPv6 -IPAddress [IPv6 ULA アドレス] -PrefixLength 64<br># IPv6 デフォルトゲートウェイ(fe80::1)設定<br>Get-NetAdapter \| New-NetRoute -AddressFamily IPv6 -DestinationPrefix ::/0 -NextHop fe80::1<br># IPv6 参照 DNS 設定<br>Get-NetAdapter \| Set-DnsClientServerAddress -ServerAddresses [参照DNS-1],[参照DNS-2],[参照DNS-3],[参照DNS-4]<br># IPv4 アドレス(/24)/デフォルトゲートウェイ設定<br>Get-NetAdapter \| New-NetIPAddress -AddressFamily IPv4 -IPAddress [IPv4 アドレス] -PrefixLength 24 -DefaultGateway [デフォルトゲートウェイ]<br># IPv4 参照 DNS 設定<br>Get-NetAdapter \| Set-DnsClientServerAddress -ServerAddresses [参照DNS-1],[参照DNS-2]<br># コンピューター名設定<br>Rename-Computer [コンピューター名] -Restart -Force |

**仮想マシンのIPアドレス、コンピューター名設定例(要管理権限)**

|     |
| --- |
| # RA による IPv6 アドレス自動構成停止<br>Set-NetIPInterface -RouterDiscovery Disabled<br># IPv6 アドレス設定(/64)<br>Get-NetAdapter \| New-NetIPAddress -AddressFamily IPv6 -IPAddress **2001:db8:400::d01** -PrefixLength 64<br>Get-NetAdapter \| New-NetIPAddress -AddressFamily IPv6 -IPAddress **fd43:6338:75ac::d01** -PrefixLength 64<br># IPv6 デフォルトゲートウェイ(fe80::1)設定<br>Get-NetAdapter \| New-NetRoute -AddressFamily IPv6 -DestinationPrefix ::/0 -NextHop fe80::1<br># IPv6 参照 DNS 設定<br>Get-NetAdapter \| Set-DnsClientServerAddress -ServerAddresses **fd43:6338:75ac::ad01,fd43:6338:75ac::ad02,2001:db8:400::ad01,2001:db8:400::ad02**<br># IPv4 アドレス(/24)/デフォルトゲートウェイ設定<br>Get-NetAdapter \| New-NetIPAddress -AddressFamily IPv4 -IPAddress **192.168.0.10** -PrefixLength 24 -DefaultGateway **192.168.0.254**<br># IPv4 参照 DNS 設定<br>Get-NetAdapter \| Set-DnsClientServerAddress -ServerAddresses **192.168.0.1,192.168.0.2**<br># コンピューター名設定<br>Rename-Computer **DHCP01** -Restart -Force |

仕上げは、プロダクト ID のアクティベーションと、ドメイン参加です。
ドメイン参加は、対話認証となるため、スクリプトで完全自動化にはならない様です。

**ライセンス登録とドメイン参加設定テンプレート**

|     |
| --- |
| # ライセンス登録<br>slmgr /ipk [PID]<br># ドメイン参加<br>Add-Computer -DomainName [ドメイン名] -Force -Restart |

**ライセンス登録とドメイン参加設定例(要管理権限)**

|     |
| --- |
| # ライセンス登録<br>slmgr /ipk **xxxxx-xxxxx-xxxxx-xxxxx**<br># ドメイン参加<br>Add-Computer -DomainName **contoso.com** -Force -Restart |

Windows Update 等の設定は、コマンドラインだと難しいので、「**sconfig**」で対話的に設定するのが無難でしょう。

仮想マシン作成、仮想マシンのIPアドレス、コンピューター名設定は、PowerShellのスクリプト(.PS1)に書いて実行するのが効率的です。

スクリプトの実行は、デフォルト禁止になっているので、管理者権限で PowerShell を起動し、「**Set-ExecutionPolicy RemoteSigned -Force**」で実行許可を与える必要があります。

**PowerShell スクリプト実行許可(要管理権限)**

|     |
| --- |
| # スクリプト実行許可<br>Set-ExecutionPolicy RemoteSigned -Force |

仮想マシン用の PowerShell スクリプトは、スクリプトを格納した VHDX を準備し、仮想マシンの SCSI デバイスにマウントするのがお勧めです。

**VHDXのSCSIマウント**

|     |
| --- |
| Add-VMHardDiskDrive -VMName [仮想マシン名] -ControllerType SCSI -Path [VHDXの場所] |

参考までに、NIC に VID をセットする場合は、「**Set-VMNetworkAdapterVlan –VMName [仮想マシン名] –Access –VlanId [VID]**」でセットします。

![back.gif (1980 バイト)](../_resources/back.gif)
 ![home.gif (1907 バイト)](../_resources/home.gif)

このページを翻訳します[![](../_resources/d16013998ddf5d46a9133d2746fcc8af.gif)](#)

[Microsoft® Translator](http://www.bing.com/translator?ref=MSTWidget)[![](../_resources/0c3282956313b021fe41127e0f25f9a0.gif)](http://www.microsofttranslator.com/widget/?ref=MSTWidget)[![](../_resources/938f81e8ade003d586edb12824911577.gif)](http://www.vwnet.jp/Windows/WS12/VMconfPS3/ConfigVMbyPS3.htmmailto:?charset=utf-8&subject=%E8%8B%B1%E8%AA%9E%E3%81%A7%E3%81%93%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%8C%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%81%8B%E3%82%89%E7%BF%BB%E8%A8%B3%E6%B8%88%E3%81%BF%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8%E3%82%92%E8%AA%BF%E3%81%B9%E3%82%8B&body=%E7%BF%BB%E8%A8%B3%E6%B8%88%E3%81%BF%3A%20http%3A%2F%2Fwww.vwnet.jp%2FWindows%2FWS12%2FVMconfPS3%2FConfigVMbyPS3.htm%23mstto%3Den%0D%0A%E3%82%AA%E3%83%AA%E3%82%B8%E3%83%8A%E3%83%AB%3A%20http%3A%2F%2Fwww.vwnet.jp%2FWindows%2FWS12%2FVMconfPS3%2FConfigVMbyPS3.htm%0D%0A%0D%0AMicrosoft%C2%AE%20Translator%20%E3%81%AB%E3%82%88%E3%82%8B%E8%87%AA%E5%8B%95%E7%BF%BB%E8%A8%B3%0D%0Ahttp%3A%2F%2Fwww.bing.com%2Ftranslator)

Copyright © [MURA](http://www.vwnet.jp/Windows/WS12/VMconfPS3/ConfigVMbyPS3.htmmailto:mura+web@vwnet.jp) All rights reserved.