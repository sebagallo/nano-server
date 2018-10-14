FROM node:8

WORKDIR /usr/src/app

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.3.0/wait /wait
RUN chmod +x /wait

COPY app.js ./
COPY package.json ./
COPY package-lock.json ./
COPY bin ./bin
COPY db ./db
COPY resources ./resources
COPY routes ./routes
RUN npm install
EXPOSE 2900
CMD /wait && npm start
