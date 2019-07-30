const { GraphQLServer } = require("graphql-yoga");
const path = require("path");
const resolvers = require("./resolvers");
const mongoose = require("mongoose");

mongoose.connect("mongodb://adailson:adailson12@ds157539.mlab.com:57539/aula", {
  useNewUrlParser: true
});

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, "schema.graphql"),
  resolvers: resolvers
});

server.start();
