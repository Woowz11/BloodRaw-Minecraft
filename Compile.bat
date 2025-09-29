@echo off
setlocal

set "SourceFolder=BloodRaw-Pack"

set "ZipFile=BloodRaw-Pack.zip"

if exist "%ZipFile%" del "%ZipFile%"

powershell -Command "Compress-Archive -Path '%SourceFolder%\*' -DestinationPath '%ZipFile%'"

echo Done!
