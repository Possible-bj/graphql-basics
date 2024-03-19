import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

// Define your GraphQL schema
const schema = buildSchema(`
  type Query {
    hello(name: String): String!
  }
`);

// Define resolvers for your schema
const resolvers = {
  hello(args, parent, ctx, info) {
    if (args?.name) {
      return `Hello, ${args.name}`;
    }
    // console.log("info >>", info);
    return "Hello, GraphQL!";
  },
};

const app = express();

// Use the /graphql endpoint for GraphQL requests
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL UI for testing
    pretty: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
