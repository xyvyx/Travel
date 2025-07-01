[Index](../index.md)

# 操作フロー

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208929.8810166121!2d136.86177914638614!3d35.094732191304296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037d289900c0d3%3A0x3ad975b4d8e88fdd!2z5qG254ut6ZaT5Y-k5oim5aC05YWs5ZyS!5e0!3m2!1sja!2sjp!4v1699783878115!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>


[エクセル](./D365基本操作フロー_2023-07-22.xlsx)


 [
>     { "key": "alt+t", "command": "type",
>         "args": { "text": "TODO:" },
>         "when": "editorTextFocus" },
>         { "key": "alt+m", "command": "type",
>             "args": { "text": "MUST:" },
>             "when": "editorTextFocus" },
>      
>         { "key": "alt+r", "command": "type",
>             "args": { "text": "REF:" },
>             "when": "editorTextFocus" }        
>             { "key": "alt+n", "command": "type",
>                 "args": { "text": "\n    =>" },
>                 "when": "editorTextFocus" }        
> ]



[Sub CreateShape()


Application.ScreenUpdating = False

    Dim rng, rng2 As Range
    Dim msg1, msg2, msg3 As String
    
 '   Dim Ans As String
    
   
    Dim xPos1, xPos2, yPos1, yPos2 As Long
    
    Dim i, j As Integer
    
   ' Dim oShape As Shape 'オートシェイプ保存用変数は、Shape型にする

    Set rng = Selection
    
    UF_SelectShape.Show
    
    'Call MsgboxSelectShape(ans)
    
    '    MsgBox (ShapeType_Return)

    For Each rng2 In rng  'For Each でループ処理
        
    rng2.Select
            
            With rng2
            msg = .Value
            
             Set oShape = ActiveSheet.Shapes.AddShape(Type:=ShapeType_Return2, _
                 Left:=.Left, Top:=.Top, Width:=.Width, Height:=.Height)
             
             
           
    End With
            
    oShape.Select
    
    Selection.Characters.Text = msg

    '追加したオートシェイプの書式を設定する
    With oShape
        .Fill.ForeColor.RGB = RGB(255, 255, 255) '塗りつぶし色
        .Fill.Visible = msoTrue
        .Fill.Solid 'グラデーション等無し
        .Line.ForeColor.RGB = RGB(0, 0, 0) '線の色
        .Line.Visible = msoTrue
        .Line.Weight = 0.25
        .TextFrame.Characters.Font.ColorIndex = 1 'Black
        .TextFrame2.VerticalAnchor = msoAnchorMiddle
        .TextFrame2.HorizontalAnchor = msoAnchorNone
        .TextFrame2.TextRange.Font.Name = rng2.Font.Name
        .TextFrame2.TextRange.Font.Bold = rng2.Font.Bold
    End With
        
  Next rng2
    
End Sub
]


<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

## 列非表示

Sub HideColumnsUnlessYellow()

    Dim ws As Worksheet
    Dim lastColumn As Long
    Dim i As Long

    'アクティブなワークシートを設定
    Set ws = ActiveSheet

    '1行目の最後の列を取得
    lastColumn = ws.Cells(1, Columns.Count).End(xlToLeft).Column

    '1列目から最後の列までループ
    For i = 1 To lastColumn
        'もし1行目のセルの色が黄色（RGB(255, 255, 0)）でなければ
        If ws.Cells(1, i).Interior.Color <> RGB(255, 255, 0) Then
            'その列を非表示にする
            ws.Columns(i).Hidden = True
        Else
            'もしその列が非表示になっていれば表示する（念のため）
            ws.Columns(i).Hidden = False
        End If
    Next i

End Sub

[Index](../index.md)
