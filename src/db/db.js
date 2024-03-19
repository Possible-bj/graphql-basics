// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
export const users = [
  {
    id: "1",
    name: "Andrew",
    email: "andrew@example.com",
    age: 27,
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com",
  },
  {
    id: "3",
    name: "Mike",
    email: "mike@example.com",
  },
];

export const posts = [
  {
    id: "10",
    title: "GraphQL 101",
    body: "This is how to use GraphQL...",
    published: true,
    author: "1",
  },
  {
    id: "11",
    title: "GraphQL 201",
    body: "This is an advanced GraphQL post...",
    published: false,
    author: "1",
  },
  {
    id: "12",
    title: "Programming Music",
    body: "",
    published: false,
    author: "2",
  },
];

export const comments = [
  {
    id: "15",
    text: "This is a comment for id 15",
    author: "1",
    post: "10",
  },
  {
    id: "16",
    text: "This is a comment for id 16",
    author: "1",
    post: "11",
  },
  {
    id: "17",
    text: "This is a comment for id 17",
    author: "2",
    post: "12",
  },
  {
    id: "18",
    text: "This is a comment for id 18",
    author: "3",
    post: "12",
  },
];
