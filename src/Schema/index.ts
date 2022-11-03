import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { GET_ALL_Product } from "./Queries/Product";
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import {DELETE_PRODUCT , UPDATE_PRODUCT ,CREATE_PRODUCT} from "./Mutations/Product"

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllProduct : GET_ALL_Product
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updatePassword: UPDATE_PASSWORD,
    createProduct: CREATE_PRODUCT,
    deleteProduct: DELETE_PRODUCT,
    updateProduct: UPDATE_PRODUCT,
    
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
