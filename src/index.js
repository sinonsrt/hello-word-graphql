const { ApolloServer, gql } = require("apollo-server");

// in graphql all requests is POST
// all requests is in the same endpoint (/graphql)

// get information = query -> GET
// change informations = mutation -> POST/PUT/PATCH/DELETE

// scalar types -> string, int, boolean, float and id(special type(graphql))

//mapping one to one - typeDefs - resolver
const typeDefs = gql`
  type Query {
    hello: String
  }
`;
const resolvers = {
  Query: {
    hello: () => "Hello word",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server up 🚀 at ${url}`));
