const functions = require('firebase-functions');
const next = require('next-server');
const express = require('express');

const app = next({ dir: __dirname, conf: { distDir: 'next' } });
const handle = app.getRequestHandler();

const server = express();

server.get('*', (req, res) => {
  return handle(req, res);
});

exports.web = functions.https.onRequest(server);
