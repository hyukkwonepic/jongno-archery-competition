const { gql } = require('apollo-server');
const { db } = require('../firebase');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const serverOption = {
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      db
    };
  }
};

module.exports = serverOption;
