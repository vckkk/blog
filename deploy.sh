#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
# 生成静态文件
# 进入生成的文件夹
npm run build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'auto'
git push -f origin master

