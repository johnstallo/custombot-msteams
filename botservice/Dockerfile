FROM node
WORKDIR /app
COPY package.json .
RUN npm install

EXPOSE 80
ENTRYPOINT ["npm", "start"]

COPY . .
