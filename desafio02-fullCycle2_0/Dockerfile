FROM node:10.16-alpine

WORKDIR /app

RUN npm i -g @nestjs/cli@6.14.2

RUN npm install -g node-gyp

ADD package.json /app/package.json

RUN npm install

ADD ./dist /app/dist
ADD database.sqlite /app

EXPOSE 3000

CMD ["npm", "run", "start:prod"]