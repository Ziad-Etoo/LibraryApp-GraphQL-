import { GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";
import { userType } from "../../users/graphql/type.js";

export const bookType = new GraphQLObjectType({
    name : "bookType",
    fields: {
        _id: {type: GraphQLID},
        title: {type: GraphQLString},
        author: {type: userType},
        genre: {type: GraphQLString},
        availableCopies: {type: GraphQLInt},
        publishedYear: {type: GraphQLInt}
    }
})