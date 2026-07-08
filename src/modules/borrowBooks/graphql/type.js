import { graphql, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { bookType } from "../../books/graphql/type.js";
import { userType } from "../../users/graphql/type.js";

export const borrowBooksType = new GraphQLObjectType({
    name: "borrowBooksType",
    fields: {
        _id:{type: GraphQLID},
        userId: {type: userType},
        bookId: {type: bookType},
        borrowedAt: {type: GraphQLString},
        dueDate: {type: GraphQLString}
    }
});