## Docker Registry Mirror

Docker hub的服务器在国外。中国国内可以用阿里加速器，更快的下载 Docker 镜像。打开 `http://dev.aliyun.com` 注册登陆后，进入管理中心。在左侧的管理控制台，打开加速器。就可以看你有一个专属加速器地址。然后依照步骤便可为linux环境的docker设置加速器了。

如果是docker for mac环境，打开Docker界面控制台，依次进入 Preferences -> Daemon -> Basic tab, 即可在此添加 Registry mirror. 然后点击 Apply & Restart

## Common commands

1. Seach offical docker image, e.g. node image:

   `docker search node`

2. Pull node image to local machine:

   `docker pull node`

3. List images on you local machine:

   `docker images`

4. Run from image in interactive mode

   `docker run -it --rm --name node_test node bash`

   Then you enter into a terminal where you can use linux command. 

5. See the containers

   `docker ps` to see running containers

   `docker ps -a` to see all containers

   `docker ps -q` to only show container id

    Press Ctrl + D to exit the container. Then the container is also removed. Because we use '--rm' option when running docker

6. Start/Stop/Remove container 

   `docker start <You container name or id>`

   `docker stop <You container name or id>`

   `docker rm  <You container name or id>`

   `docker rm $(docker ps -q)` to remove all running containers

7. Commit container changes to an image.

   `docker tag <you container id> <your repository:version>`, my example.:
   `docker tag bc425259a99c jackiege/node:0.1`

8. Push images

   `docker push <your repository:version>` my example:
   `docker push jackiege/node:0.1`

9. Remove one image
 
   `docker rmi <you image repository:tag or id>` It cannot be done if this image has associated containers

   `docker rmi -f <you image repository:tag or id>` It works even this image has associated containers

## Optimize Dockerfile

Each command (e.g. RUN, ENV, EXPOSE, VOLUME) in dockerfile would generate a layer. Its recommended to combine multiple usages of the same commands, to reduce layers generated. Usage exampe:

   RUN apt-get update \

    && apt-get install git python

    

   ENV PGSERVER="192.168.1.105" \

    PGPORT=15432 PGUSER="postgres" \

    PGPASSWORD="mysecretpassword" \

    PGDATABASE="test" \

    PORT=8081

EXPOSE 8080 8081 8082

VOLUME ["/var/data", "/var/log"] 