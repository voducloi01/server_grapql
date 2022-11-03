import { Products } from './../../Entities/Product';
import { ProductType } from './../TypeDefs/Product';
import { GraphQLID, GraphQLString ,GraphQLInt } from "graphql";

import { MessageType } from "../TypeDefs/Messages";


export const CREATE_PRODUCT = {
  type: ProductType,
  args: {
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, price, image } = args;
    await Products.insert({ name, price, image });
    return args;
  },
};

export const UPDATE_PRODUCT = {
  type: MessageType,
  args: {
    id  : {type :GraphQLID} ,
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { id , name, price, image  } = args;
    const user = await Products.findOne({ id: id });

    if (!id) {
      throw new Error("Not ID DOESNT EXIST");
    } else {
        await Products.update({ id: id }, { name : name  , price : price , image : image});
        return { successful: true, message: "Product UPDATED" };
    } 
}
}

export const DELETE_PRODUCT = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Products.delete(id);
    return { successful: true, message: "DELETE WORKED" };
  },
};
