import { GraphQLList } from "graphql";
import { CartType } from "../TypeDefs/Cart";
import { Carts } from "../../Entities/Cart";

export const GET_ALL_CART = {
  type: new GraphQLList(CartType),
  resolve() {
    return Carts.find();
  },
};
