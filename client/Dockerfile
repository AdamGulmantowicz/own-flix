FROM node:16.17.0

WORKDIR /home/client/app

COPY package.json ./

RUN npm i

COPY . .
RUN npm run build
RUN mkdir -p /home/node/app/public
RUN cp -R ./dist/** ../../node/app/src/public/
