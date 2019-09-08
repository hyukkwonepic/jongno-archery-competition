const { ApolloServer } = require('apollo-server');
const serverOption = require('./src');

const server = new ApolloServer(serverOption);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
