import { GraphQLObjectType, GraphQLID, GraphQLString ,GraphQLInt} from "graphql";

export const CartType = new GraphQLObjectType({
  name: "Cart",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
    soluong : {type :GraphQLInt },
    total : {type :GraphQLInt }
  }),
});
