Set WshShell = WScript.CreateObject("WScript.Shell")
WScript.Sleep 100000

' For BSOD

' WshShell.Run "iexplore.exe -k http://127.0.0.1:5500/", 9
' WshShell.Run "http://127.0.0.1:5500", 9

' For something more

' Dim IE, key

' Set IE = WScript.CreateObject("InternetExplorer.Application")
' IE.Visible = true
' IE.FullScreen = true

' IE.Navigate "http://127.0.0.1:5500/"

' Do While key = false
'     Do While IE.busy : WScript.Sleep 100 : Loop
'     set IE.document.body.onkeypress = GetRef("openWindow")
' Loop

' Sub openWindow
'     if IE.document.parentWindow.event.keycode = 27 then key = true
'     IE.Navigate "D:\Github\Poker\index.html"
' End Sub
