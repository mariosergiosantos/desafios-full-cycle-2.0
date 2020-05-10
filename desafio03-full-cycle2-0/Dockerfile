FROM node:10.16-alpine

WORKDIR /app

RUN npm i -g @nestjs/cli@6.14.2

ADD package.json /app/package.json

RUN npm install

ADD ./dist /app/dist
ADD ./public /app/public
ADD ./views /app/views

EXPOSE 3000

CMD ["npm", "run", "start:prod"]