FROM node:16

RUN mkdir -p src/app

ENV PORT=8080

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "dev" ]