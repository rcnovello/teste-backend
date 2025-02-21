
FROM node:22.13.1

WORKDIR /usr/src/app/wefit

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 4568