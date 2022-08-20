FROM node:14

WORKDIR /home/client/app

COPY package.json ./

RUN npm i

COPY . .

CMD [ "npm", "run", "build" ]
