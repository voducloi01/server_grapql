import { Carts } from './../../Entities/Cart';
import { CartType } from './../TypeDefs/Cart';
import { GraphQLID, GraphQLString ,GraphQLInt } from "graphql";

import { MessageType } from "../TypeDefs/Messages";


export const CREATE_CART = {
  type: CartType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    soluong:{type : GraphQLInt},
    total : {type : GraphQLInt}
  },
  async resolve(parent: any, args: any) {
    const {id , name, price, image ,soluong , total } = args;
    await Carts.insert({id , name, price, image,soluong , total });
    return args;
  },
};

export const UPDATE_CART = {
  type: MessageType,
  args: {
    id  : {type :GraphQLString} ,
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    soluong:{type : GraphQLInt},
    total : {type : GraphQLInt}
  },
  async resolve(parent: any, args: any) {
    const { id , name, price, image ,soluong ,total  } = args;
    const user = await Carts.findOne({ id: id });

    if (!id) {
      throw new Error("Not ID DOESNT EXIST");
    } else {
        await Carts.update({ id: id }, { name : name  , price : price , image : image , soluong : soluong , total : total});
        return { successful: true, message: "Product UPDATED" };
    } 
}
}

export const DELETE_CART = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(parent: any, args: any) {
    const id = args.id;
    await Carts.delete(id);
    return { successful: true, message: "DELETE WORKED" };
  },
};
