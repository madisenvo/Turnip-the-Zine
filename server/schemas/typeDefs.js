const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Post{
  _id: ID
  postBody: String
  username: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    orders: [Order]
    posts: [Post]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    posts:[Post]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, username:String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, username:String!,  email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addPost(postBody: String!, username: String!): User
    updatePost(_id: ID!, postBody: String!): Post
    deletePost(_id: ID!): User
  }
`;

module.exports = typeDefs;
