import { GraphQLList } from "graphql";
import { ProductType } from "../TypeDefs/Product";
import { Products } from "../../Entities/Product";

export const GET_ALL_Product = {
  type: new GraphQLList(ProductType),
  resolve() {
    return Products.find();
  },
};
