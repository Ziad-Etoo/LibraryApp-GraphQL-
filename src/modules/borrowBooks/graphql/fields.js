import { GraphQLID } from "graphql";
import * as BR from "./resolve.js";
import { borrowBooksType } from "./type.js";
import { bookType } from "../../books/graphql/type.js";
import { MessageType } from "../../users/graphql/type.js";

export const BorrowedBookQuery = {
    getOverdueBooks: {
        type: borrowBooksType,
        resolve: BR.getOverdueBooks
    }
}

export const BorrowedBookMutation = {
    borrowBook: {
        type: bookType,
        args: {
            bookId: { type: GraphQLID },
        },
        resolve : BR.borrowBook
    },
    returnBook:{
        type: MessageType,
        args: {
            bookId: { type: GraphQLID },
        },
        resolve : BR.returnBook
    }
}