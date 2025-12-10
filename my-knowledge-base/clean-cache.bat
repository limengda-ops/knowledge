@echo off
echo ===== 开始清理缓存 =====
echo.

echo 1. 停止运行中的进程...
taskkill /f /im node.exe 2>nul
if %errorlevel%==0 (
    echo   ✓ 停止 Node.js 进程
) else (
    echo   ℹ 没有 Node.js 进程在运行
)

echo.
echo 2. 删除缓存目录...
if exist .next (
    rmdir /s /q .next
    echo   ✓ 删除 .next 缓存
) else (
    echo   ℹ .next 目录不存在
)

if exist node_modules (
    echo   ⚠ node_modules 存在，是否删除？[Y/N]
    set /p choice=
    if /i "%choice%"=="Y" (
        rmdir /s /q node_modules
        echo   ✓ 删除 node_modules
    )
)

echo.
echo 3. 删除生成的文件...
if exist out (
    rmdir /s /q out
    echo   ✓ 删除 out 目录
)

del package-lock.json 2>nul
echo   ✓ 清理 lock 文件

echo.
echo 4. 检查关键配置文件...
if exist next.config.ts (
    echo   ⚠ 发现 next.config.ts (应改为 .js)
    rename next.config.ts next.config.js.backup
    echo   ✓ 已重命名为 .backup
)

echo.
echo ===== 清理完成 =====
echo.
echo 下一步：
echo 1. 重新安装依赖：npm install
echo 2. 启动开发服务器：npm run dev
echo 3. 访问：http://localhost:3000
pause