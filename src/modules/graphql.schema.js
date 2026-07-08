import { graphql, GraphQLObjectType, GraphQLSchema } from "graphql";
import { bookMutation, bookQuery } from "./books/graphql/fields.js";
import { libraryQuery } from "./libraries/graphql/fields.js";
import { BorrowedBookMutation, BorrowedBookQuery } from "./borrowBooks/graphql/fields.js";
import { userMutation } from "./users/graphql/fields.js";

export const schema = new GraphQLSchema ({
    query: new GraphQLObjectType({
        name: "query",
        fields: {
            ...bookQuery,
            ...libraryQuery,
            ...BorrowedBookQuery
        }
    }),
    mutation: new GraphQLObjectType({
        name: "mutation",
        fields: {
            ...userMutation,
            ...bookMutation,
            ...BorrowedBookMutation
        }
    })
})