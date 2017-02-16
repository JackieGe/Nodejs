learn to write Koa2 in typescript and run on nodejs. 

Welcome to email to gewenqiu@163.com if you have any questions It will be my pleasure if it can help.

Usage:
#1 Install typescript:
   sudo npm install typescript -g

   -- Check version and see if its properly installed (require v2.1 and above)

   tsc -v
   
   -- refer to http://www.typescriptlang.org/docs/tutorial.html

#2 Install nodejs (latest)

#3 git clone the code to your local
   git clone https://github.com/JackieGe/nodejs.git

#4 install package based on "package.json"
   npm install 

   -- npm 服务器在国外，如果网速不够好的话，可以设置从淘宝镜像下载。如下命令：

   npm config set registry "https://registry.npm.taobao.org/"

   或者仅仅在安装npm包时 使用淘宝镜像。
   
   npm install --registry "https://registry.npm.taobao.org/"

#5 compile typescript based on "tsconfig.json"
   tsc

#6 start
   node --harmony index.js

#7 Open the code directory via VSCode, where we can write code

#8 how to install koa2 ?
npm install koa@next
npm install koa-router@next
npm install koa-bodyparser@next
npm install kcors@next
