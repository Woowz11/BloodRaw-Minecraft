@echo off
setlocal

set "SourceFolder=BloodRaw-Pack"
set "ZipFile=BloodRaw-Pack.zip"

if exist "%ZipFile%" del "%ZipFile%"

pushd "%SourceFolder%"
7z a -tzip "..\%ZipFile%" * -mx=1 -mmt=on -r -bb0 >nul
popd

echo Done!
