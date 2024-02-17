[![](AI%E8%B6%85%E8%A7%A3%E5%83%8F%E3%81%A7%E5%8F%A4%E3%81%84%E3%83%93%E3%83%87%E3%82%AA%E3%81%8C%E3%82%AD%E3%83%AC%E3%82%A4%E3%81%AB%E5%BE%A9%E5%85%83%E3%81%A7%E3%81%8D%E3%82%8B%E3%80%8CVLC%20media%20player%203.0.19%E3%80%8D%E3%81%8C%E5%85%AC%E9%96%8B%E3%80%81%E3%82%BC%E3%83%AD%E3%83%87%E3%82%A4%E8%84%86%E5%BC%B1%E6%80%A7%E3%81%AE%E4%BF%AE%E6%AD%A3%E3%82%82%20-%20%E7%AA%93%E3%81%AE%E6%9D%9C/image1_l.png)](https://forest.watch.impress.co.jp/img/wf/docs/1538/728/html/image1.png.html)

「VLC media player 3.0.19」

-   [窓の杜から  
    ダウンロード](https://forest.watch.impress.co.jp/library/software/vlcmedia_ply/)

　仏VideoLAN Projectは、「VLC media player 3.0.19」を正式公開した。[2022年11月](https://forest.watch.impress.co.jp/docs/news/1459768.html)以来、約1年ぶりのアップデートとなる。

　「VLC media player 3.0.19」ではAV1ビデオのハードウェア（GPU）デコーディングが有効化されたほか、「SuperResolution Scaling」（超解像スケーリング）がサポートされる。

![](AI%E8%B6%85%E8%A7%A3%E5%83%8F%E3%81%A7%E5%8F%A4%E3%81%84%E3%83%93%E3%83%87%E3%82%AA%E3%81%8C%E3%82%AD%E3%83%AC%E3%82%A4%E3%81%AB%E5%BE%A9%E5%85%83%E3%81%A7%E3%81%8D%E3%82%8B%E3%80%8CVLC%20media%20player%203.0.19%E3%80%8D%E3%81%8C%E5%85%AC%E9%96%8B%E3%80%81%E3%82%BC%E3%83%AD%E3%83%87%E3%82%A4%E8%84%86%E5%BC%B1%E6%80%A7%E3%81%AE%E4%BF%AE%E6%AD%A3%E3%82%82%20-%20%E7%AA%93%E3%81%AE%E6%9D%9C/auto-user-sync.gif)![](AI%E8%B6%85%E8%A7%A3%E5%83%8F%E3%81%A7%E5%8F%A4%E3%81%84%E3%83%93%E3%83%87%E3%82%AA%E3%81%8C%E3%82%AD%E3%83%AC%E3%82%A4%E3%81%AB%E5%BE%A9%E5%85%83%E3%81%A7%E3%81%8D%E3%82%8B%E3%80%8CVLC%20media%20player%203.0.19%E3%80%8D%E3%81%8C%E5%85%AC%E9%96%8B%E3%80%81%E3%82%BC%E3%83%AD%E3%83%87%E3%82%A4%E8%84%86%E5%BC%B1%E6%80%A7%E3%81%AE%E4%BF%AE%E6%AD%A3%E3%82%82%20-%20%E7%AA%93%E3%81%AE%E6%9D%9C/user-matching.gif)

　これは最先端のAI画像処理とGPUを組み合わせて低解像度ビデオをGPUでアップスケール（拡大）できる技術で、古いビデオを鮮明に再生することが可能。今年4月からNVIDIAの「GeForce RTX 30/40」シリーズで利用できるテスト版が提供されていたが、リリースノートによると正式版ではIntelのGPUにも対応するようだ。

　そのほかにも、コーデックのアップデートや多くの不具合修正が行われている。セキュリティ関連の主な修正は、以下の通り（括弧内は「CVSS 3.x」の評価値）。

-   [CVE-2022-37434](https://nvd.nist.gov/vuln/detail/CVE-2022-37434)：「zlib」のヒープバッファーオーバーフロー（9.8、Critical）
-   [CVE-2023-5217](https://nvd.nist.gov/vuln/detail/CVE-2023-5217)：「libvpx」のヒープバッファーオーバーフロー（8.8、High）

　とくに「CVE-2023-5217」は[「Google Chrome」などで攻撃が確認](https://forest.watch.impress.co.jp/docs/news/1534946.html)されており、警戒が必要だ。

　デスクトップ版「VLC media player」は、オープンソースで開発されているマルチプラットフォーム対応のメディアプレイヤー。わざわざ追加のコーデックを導入しなくても、幅広いファイルフォーマットに対応しているのが魅力だ。対応OSはWindows/Mac/Linuxなどで、現在「videolan.org」から無償でダウンロード可能（寄付歓迎）。Windowsデスクトップ向けは窓の杜ライブラリからも入手できる。