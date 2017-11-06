const { ParseServer } = require('parse-server');
const ParseDashboard = require('parse-dashboard');
const express = require('express');
const server = require('./server/index');

const appId = process.env.PARSE_SERVER_APP_ID;
const appName = process.env.PARSE_SERVER_APP_NAME;
const masterKey = process.env.PARSE_SERVER_MASTER_KEY;
const serverURL = process.env.PARSE_SERVER_URL;
const dashboardUser = process.env.PARSE_SERVER_DASHBOARD_USER;
const dashboardPassword = process.env.PARSE_SERVER_DASHBOARD_PASSWORD;

const parseServer = new ParseServer({
  databaseURI: 'mongodb://mongo:27017/parse-server',
  cloud: './server/cloud/index.js',
  appId,
  masterKey,
  serverURL
});

const allowInsecureHTTP = true;
const parseDashboard = new ParseDashboard({
  apps: [
    {
      serverURL,
      appId,
      masterKey,
      appName
    }
  ],
  users: [
    {
      user: dashboardUser,
      pass: dashboardPassword
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
