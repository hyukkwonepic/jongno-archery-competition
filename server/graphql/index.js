const { ApolloServer } = require('apollo-server-micro');
const serverOption = require('./src');

const server = new ApolloServer({
  ...serverOption,
  introspection: true,
  playground: true
});

module.exports = server.createHandler({ path: '/graphql' });
