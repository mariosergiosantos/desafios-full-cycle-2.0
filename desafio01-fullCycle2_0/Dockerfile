FROM node:10.16-alpine

WORKDIR /app

ADD package.json /app/package.json

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]

COPY . .
