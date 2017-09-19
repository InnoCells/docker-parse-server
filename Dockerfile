FROM node:8.5

ENV PARSE_SERVER_HOME /parse-server

RUN mkdir -p $PARSE_SERVER_HOME

WORKDIR $PARSE_SERVER_HOME

COPY index.js ./
COPY package.json ./

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
