[Index](../index.md)

# 操作フロー

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



Sub CreateShape()


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

[Index](../index.md)