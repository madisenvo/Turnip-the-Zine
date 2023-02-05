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



export const DELETE_POST = gql`
mutation deletePost($id: ID!) {
  deletePost(_id: $id) {
    _id
    email
    firstName
    lastName
    username
    orders {
      _id
      products {
        _id
        category {
          _id
          name
        }
        description
        image
        name
        price
        quantity
      }
      purchaseDate
    }
    posts {
      _id
      postBody
      username
    }
  }
}
`;

export const UPDATE_POST = gql`
  mutation updatePost($id: ID!, $postBody: String!) {
    updatePost(_id: $id, postBody: $postBody) {
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

export const ADD_POST = gql`
mutation addPost($postBody: String!, $username: String!) {
  addPost(postBody: $postBody, username: $username) {
    _id
    email
    firstName
    lastName
    username
    orders {
      _id
      products {
        category {
          _id
          name
        }
      }
    }
    posts {
      _id
    }
  }
}
`
