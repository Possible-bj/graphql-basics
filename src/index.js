import fs from "fs";
import path from "path";
import { createServer } from "node:http";
import { createSchema, createYoga } from "graphql-yoga";
import { resolvers } from "./resolvers";
import { db } from "./db";

const schemaPath = path.join(__dirname, "./schema/schema.graphql");
const typeDefs = fs.readFileSync(schemaPath, "utf8");

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ typeDefs,

    resolvers: resolvers,
  }),
  context: {
    db,
  },
  maskedErrors: {
    maskError: (error, message, isDev) => {
      // console.log("error >>", error);
      return {
        name: "Error",
        message: error?.message,
        stack: isDev ? error?.stack : undefined, // Include stack trace only in development mode
      };
    },
    errorMessage: "An error occurred.", // Custom error message to send to the client
    isDev: true, // Determine whether the application is in development mode
    // isDev: process.env.NODE_ENV === "development", // Determine whether the application is in development mode
  },
  graphqlEndpoint: "/",
});

const server = createServer(yoga);

server.listen(5000, () => {
  console.info("Server is running on http://localhost:5000/graphql");
});
