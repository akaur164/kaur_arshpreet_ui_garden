# Assignment 12 Dockerfile
FROM node:20-alpine

WORKDIR /kaur_arshpreet_ui_garden

COPY package*.json ./

RUN npm install

RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 8083

CMD ["serve", "-s", "build", "-l", "8083"]