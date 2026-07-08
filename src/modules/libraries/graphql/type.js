import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { bookType } from "../../books/graphql/type.js";

export const libraryType = new GraphQLObjectType({
    name : "libraryType",
    fields: {
        _id: {type: GraphQLID},
        name: { type: GraphQLString },
        location: { type: GraphQLString },
        books: { type: bookType }
    }
})