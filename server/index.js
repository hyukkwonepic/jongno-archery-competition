const functions = require('firebase-functions');

const app = require('./src');

exports.graphql = functions.https.onRequest(app);
