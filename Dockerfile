FROM node:18.8.0-alpine3.16

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 80

CMD [ "yarn", "serve" ]
