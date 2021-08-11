# alpine son mas ligeras
FROM node:14.17.4-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3200

CMD [ "npm","start" ]