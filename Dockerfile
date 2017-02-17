FROM node

#RUN apt-get update \
    #  && apt-get install -y ruby

RUN mkdir -p /WebServer 
    #&& chmod -R 777 /WebServer (no need, but put here as a reference)
WORKDIR /WebServer

#we can use  . (i.e. current relative dir, after WORKDIR is set)
COPY package.json .

# RUN touch hello.txt && echo "hello world" > hello.txt && pwd
# RUN git clone https://github.com/JackieGe/nodejs.git
# RUN npm install typescript -g
RUN npm install --registry "https://registry.npm.taobao.org/" --production
# copy files under dist to /WebServer
COPY dist .

ENV PGSERVER="192.168.1.105"
ENV PGPORT=15432
ENV PGUSER="postgres"
ENV PGPASSWORD="mysecretpassword"
ENV PGDATABASE="test"

ENV PORT=8081
EXPOSE 8081

CMD ["npm", "start"]