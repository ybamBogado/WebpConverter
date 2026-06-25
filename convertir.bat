@echo off
setlocal enabledelayedexpansion

set ENTRADA=%1
if "%ENTRADA%"=="" set ENTRADA=%~dp0

echo === Convirtiendo imagenes a WebP (Sharp) ===
node "%~dp0convertir.js" "%ENTRADA%"

echo.
pause