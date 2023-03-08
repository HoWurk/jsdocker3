# Docker node js app tutorial

### Create dir

mkdir dockerjsapp

cd dockerjsapp

### Create Dockerfile

type NUL > Dockerfile

notepad Dockerfile

### Add code to Dockerfile:

FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]

### Run docker

docker build -t jsapp .

docker run -d -p 80:80 --cpus="1" --memory="512m" jsapp

### Push into dockerhub

docker login --username=howurk

docker tag jsapp howurk/jsapp

docker push howurk/jsapp

### Push into git
