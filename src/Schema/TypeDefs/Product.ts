import { GraphQLObjectType, GraphQLID, GraphQLString ,GraphQLInt} from "graphql";

export const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    price: { type: GraphQLInt },
    image: { type: GraphQLString },
  }),
});
