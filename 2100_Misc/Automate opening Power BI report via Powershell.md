---
title: Automate opening Power BI report via Powershell
updated: 2016-12-06 04:02:44Z
created: 2016-12-06 04:02:44Z
source: >-
  https://community.powerbi.com/t5/Developer/Automate-opening-Power-BI-report-via-Powershell/m-p/47029#M1430
tags:
  - SI
---

# Automate opening Power BI report via Powershell

I'm posting this in case someone has a similar requirement and finds this useful.

We have a requirement to display KPIs on large monitors in a warehouse environment.  We installed monitors and PCs and set the PCs to auto logon after bootup.  After the user is logged on, the following Powershell script runs to open the KPI report in IE and set Power BI to full screen.  We didn't attempt to script login to Power BI, so you'll need to make sure Power BI is set to remember the current user credentials before using this script.

# Set report URL

$URL = "https://app.powerbi.com/" #replace this URL with a direct URL to the report you want to open

# Open an IE window and navigate to the URL

$ie = New-Object -com internetexplorer.application
$ie.visible = $true
$ie.FullScreen = $true
$ie.navigate($URL)

# Wait on IE to load page

while ($ie.Busy -eq $true)
{
Start-Sleep -Milliseconds 100
}

# Bring IE to the foreground

$code=@'
using System;
using System.ComponentModel;
using System.Runtime.InteropServices;
static public class Win32{
[DllImport("user32.dll")]
[return: MarshalAs(UnmanagedType.Bool)]
static public extern bool SetForegroundWindow(IntPtr hWnd);
}
'@
Add-Type $code
$handles=(get-process iexplore).MainWindowHandle

$handles|%{[win32]:![Smiley Frustrated](../_resources/16x16_smiley-frustrated.png)etForegroundWindow($_)}

# Set Power BI Fullscreen

$fs = $ie.Document.DocumentElement.getElementsByClassName('glyphicon glyph-small pbi-glyph-fullscreen') | Select-Object -first 1

$fs.click()