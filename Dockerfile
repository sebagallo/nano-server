FROM node:8

WORKDIR /usr/src/app

COPY app.js ./
COPY package.json ./
COPY package-lock.json ./
COPY bin ./bin
COPY db ./db
COPY resources ./resources
COPY routes ./routes
RUN npm install
EXPOSE 2900
CMD ["npm", "start"]
