import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

// Maddy added post mutations
export const ADD_POST = gql`
  mutation addPost($postBody: String!, $username: String!) {
    addPost(postBody: $postBody, username: $username) {
      _id
      username
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletedPost($postId: ID!) {
    deletedPost(postId: $postId) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($postId: ID!, $postBody: String!) {
    updatePost(postId: $postId, postBody: $postBody) {
      _id
      postBody
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $username: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      username: $username
    ) {
      token
      user {
        _id
      }
    }
  }
`;
