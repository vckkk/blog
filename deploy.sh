# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# npm run docs:build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# git init
# git add -A
# git commit -m 'auto'

#  git push -f origin master


# cd -
@echo off 
#换成你的文件相对路径
cd docs/.vuepress/dist


git init
git add -A

git commit -m 'auto'


git push -f origin master
