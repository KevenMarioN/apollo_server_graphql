import { ApolloServer, PubSub } from "apollo-server";
import mongoose from "mongoose";

function startServer({typeDefs,resolvers}) {
  mongoose.connect('mongodb://keven:123456@localhost:27017/graphql');
  const pubsub = new PubSub();
  const server = new ApolloServer({typeDefs,resolvers, context : {
    pubsub
  }});
  server.listen().then(({url}) => console.log(`🔥 Server started at ${url}`));
}

export default startServer;