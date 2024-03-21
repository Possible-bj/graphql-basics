import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { User } from "./User";
import { Post } from "./Post";
import { Comment } from "./Comment";
import { Subscription } from "./Subscription";

export const resolvers = {
  // Query Resolver
  Query,
  //   Mutation
  Mutation,
  //   Subscription
  Subscription,
  //   Relational Data resolver
  User,
  Post,
  Comment,
};
