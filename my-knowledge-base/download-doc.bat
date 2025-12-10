@echo off
echo ===== 下载技术文档 =====
echo.

echo 正在创建技术文档文件...
(
echo # 知识库搭建全流程技术文档
echo.
echo ^> 本文档记录了从零开始构建 Next.js 静态知识库的完整过程。你可以将这篇文档作为模板，添加到你的知识库中。
echo.
echo ...（这里会放置完整内容，但批处理文件有长度限制，建议使用方法1或3）
) > content\posts\how-to-build-knowledge-base.md

echo 文档框架已创建
echo 请使用方法1复制完整内容到该文件
echo.
echo 文件位置：content\posts\how-to-build-knowledge-base.md
pause