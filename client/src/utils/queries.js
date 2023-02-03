import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postBody: String!, $username: String!) {
    addPost(postBody: $postBody) {
      _id
      postBody
      username
      createdAt
    }
  }
`;

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const UPDATE_POST = gql`
  mutation updatePost($postId: ID!, $postBody: String!) {
    updatePost(postId: $postId, postBody: $postBody) {
      _id
      postBody
      username
      createdAt
    }
  }
`;



export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
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
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_POSTS = gql`
  {
    posts {
      _id
      createdAt
      postBody
      username
    }
  }
`;


export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      username
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
