import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { User } from "./User";
import { Post } from "./Post";
import { Comment } from "./Comment";

export const resolvers = {
  // Query Resolver
  Query,
  //   Mutation
  Mutation,
  //   Relational Data resolver
  User,
  Post,
  Comment,
};