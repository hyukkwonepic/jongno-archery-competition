const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cookieParser = require('cookie-parser');
const { db, auth } = require('../firebase/index');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express();

app.use(cookieParser());

app.use(async (req, res, next) => {
  const sessionCookie = req.cookies.session;

  if (sessionCookie) {
    try {
      const decodedClaims = await auth.verifySessionCookie(sessionCookie, true);
      req.session = decodedClaims;
    } catch (e) {
      console.log(e);
      res.clearCookie('session');
    }
  }

  next();
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    return {
      req,
      res,
      db,
      auth
    };
  },
  // Enable graphiql gui
  introspection: true,
  playground: true
});

apolloServer.applyMiddleware({
  app,
  path: '/',
  cors: {
    credentials: true,
    origin: true
  }
});

module.exports = app;
