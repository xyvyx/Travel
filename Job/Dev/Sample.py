import re
# -*- coding:utf-8 -*-
i = 1
j = 1

# 編集したいファイル（元ファイル）を開く
file = open("sample.csv","r")
# 書き出し用のファイルを開く
out_file = open("出力データ.csv","w")

# 書き出し用ファイルのヘッダーを記述
out_file.write("名称,住所,都道府県,分類,Rank,訪問日,分類,メモ,メモURL\n")

# 元ファイルのヘッダーをreadlineメソッドで１行飛ばす
file.readline()
# 元ファイルのレコード部分をreadlinesメソッドで全行を読み取る
lines = file.readlines()

# for文で1行ずつ取得
for line in lines:
    
   
    # 改行コードをブランクに置換
    line = line.replace("\n","")
    # カンマ区切りでリストに変換する
    line = line.split(",")

    # 取得した行が都道府県でなかったら、書き出しの処理
    if j == 1:
        row1 = line[0].replace(" ","")
        
    if j == 2:
        row2 = line[0].replace(" ","")
        match =  re.search('東京都|北海道|(?:京都|大阪)府|.{2,3}県' , line[0])
        if match:
                 row3 =    match.group().replace(" ","")
        else: 
                  row3 =   ""
     
        row = "{},{},{},{},{},{},{},{},{}\n".format(
                row1,
                row2,
                row3,
                "",
                "",
                "",
                "",
                "",
                ""
                )
        print(row.replace("\n",""))
        out_file.write(row)
       # もし取得した行の先頭が#だったら、都道府県名を取得する。
    if line[0] == "この場所の情報を共有しましょう":
        j = 0
  #  out_file.write(row)

   
   # print(row)
    i = i + 1
    j = j + 1                       
    
 # 書き出し用のファイルに出力
out_file.write(row)

# ２つのファイルを閉じる
file.close()
out_file.close()