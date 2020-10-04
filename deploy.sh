#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 1、生成静态文件
npm run build

# 2、进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# 3、提交
git init
git add -A
git commit -m 'deploy-updata'

# 3-1、提交到github和gitee仓库仓库中

# 如果想用username.gitee.io或者username.github.io访问你的网站，必须让新建的仓库地址和你的用户名一致！！

# 提交到github
git push -f git@github.com:Hacker-King/Hacker-King.github.io.git master


cd -

# 结束
