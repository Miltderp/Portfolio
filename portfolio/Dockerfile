FROM node:18

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install 

ENV PORT=5173

EXPOSE 5173

CMD [ "npm", "run", "dev" ]