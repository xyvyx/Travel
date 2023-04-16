---
title: function ChangeColorGrid() {
updated: 2017-05-31 08:26:52Z
created: 2017-05-31 08:26:44Z
author: xyvyx10@gmail.com
tags:
  - ChangeGrid
  - KRI
---

function ChangeColorGrid() {

 var rows = window.top.document.getElementById('contentIFrame0').contentWindow.document.getElementById("gridBodyTable").rows;

    for (rowNum = 1; rowNum < rows.length; rowNum++) {

              var cells = rows[rowNum].cells[1];

//window.alert("Row:"+rowNum+"celltext:"+cells.innerText);
            var varmsg = cells.innerText;

//window.alert("varmsg :"+varmsg.trim());
              if(varmsg.trim() == "Warning"){
//window.alert("changing style color");
                    //    rows[rowNum].style.backgroundColor = "yellow";
                        rows[rowNum].style.backgroundColor = "coral";

         }else if(varmsg.trim() == "Alert"){
                   //   rows[rowNum].style.backgroundColor = "orangered";
                          rows[rowNum].style.backgroundColor = "mediumpurple";

                          }

     }
}