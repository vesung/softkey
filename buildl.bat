rem 关闭自动输出
@echo off 
set verno=
set /p verno=请输入版本号:
rem 输出得到的输入信息
set version=%verno%

echo 清空目标目录
mkdir target
cd target
del /s /q /f *.*
for /d %%i in (*) do rd /s /q "%%i"
mkdir softkey
cd ..
pause

echo 复制文件
xcopy .\softKey .\target\softkey /E /Y

echo 添加版本信息%tcrversion%到.\target\tcr_tmp\version
echo %version% > .\target\softkey\version.ini

echo 加密js
call java -jar ./build/jscomp.jar ./target/softkey virtualkeyboard.full.js,JP.js

xcopy .\*_demo*.html .\target
xcopy .\*.js .\target
xcopy .\*.md .\target

echo 打包完成
pause