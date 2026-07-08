import { graphql,GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString, GraphQLInt} from "graphql";
import * as BR from "./resolve.js";
import * as BT from "./type.js";

export const bookQuery = {
    getBookById: {
        type: BT.bookType,
        args: {
            id: { type: new GraphQLNonNull(GraphQLID) }
        },
        resolve: BR.getBookById
    },
    getAllBooks: {
        type: new GraphQLList(BT.bookType),
        resolve: BR.getAllBooks
    }
}

export const bookMutation = {
    addBook: {
        type: BT.bookType,
        args: {
            title: { type: new GraphQLNonNull(GraphQLString) },
            author: { type: new GraphQLNonNull(GraphQLString) }, ///
            publishYear: { type: new GraphQLNonNull(GraphQLInt) },
            genre: { type: new GraphQLNonNull(GraphQLString) },
            availableCopies: { type: new GraphQLNonNull(GraphQLInt) }
        },
        resolve: BR.addBook
    }
}