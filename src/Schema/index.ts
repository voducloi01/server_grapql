import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS } from "./Queries/User";
import { GET_ALL_Product } from "./Queries/Product";
import {GET_ALL_CART} from './Queries/Cart'
import { CREATE_USER, DELETE_USER, UPDATE_PASSWORD } from "./Mutations/User";
import {DELETE_PRODUCT , UPDATE_PRODUCT ,CREATE_PRODUCT} from "./Mutations/Product"
import {CREATE_CART,UPDATE_CART,DELETE_CART} from './Mutations/Cart'

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getAllProduct : GET_ALL_Product,
    getAllCart :GET_ALL_CART
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
    createCart : CREATE_CART ,
    updateCart : UPDATE_CART ,
    deleteCart  : DELETE_CART
    
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
