const ParseServer = require('parse-server').ParseServer;
const ParseDashboard = require('parse-dashboard');
const express = require('express');
const server = require('./server/index');

const parseServer = new ParseServer({
  databaseURI: 'mongodb://mongo:27017/parse-server',
  cloud: './server/cloud/index.js',
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  serverURL: 'http://localhost/parse'
});

const allowInsecureHTTP = true;
const parseDashboard = new ParseDashboard({
  'apps': [
    {
      'serverURL': 'http://localhost/parse',
      'appId': 'myAppId',
      'masterKey': 'myMasterKey',
      'appName': 'MyApp'
    }
  ],
  'users': [
    {
      'user': 'user',
      'pass': 'password'
    }
  ]
}, allowInsecureHTTP);

const app = express();
app.use('/parse', parseServer);
app.use('/dashboard', parseDashboard);

server(app);

app.listen(8080, () => {
  console.log('Parse Server running on port 8080!');
});