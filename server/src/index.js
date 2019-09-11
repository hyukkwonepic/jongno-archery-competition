const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { db } = require('../firebase/index');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const app = express();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      db
    };
  },
  // Enable graphiql gui
  introspection: true,
  playground: true
});

apolloServer.applyMiddleware({ app, path: '/', cors: true });

module.exports = app;
