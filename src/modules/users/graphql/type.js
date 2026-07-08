import { graphql, GraphQLID, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { bookType } from "../../books/graphql/type.js";

export const userType = new GraphQLObjectType({
  name: "userType",
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    phone: { type: GraphQLString },
    borrowedBooks: { type: new GraphQLList(bookType) }
  })
});

export const signUpType = new GraphQLObjectType({
  name: "signUpType",
  fields: () => ({
    message: { type: GraphQLString },
    user: { type: userType }
  })
});

export const loginType = new GraphQLObjectType({
    name: "loginType",
    fields: () => ({
      token: { type: GraphQLString }
    })
});

export const MessageType = new GraphQLObjectType({
  name: "DeleteUser",
    fields: () => ({
        message: { type: GraphQLString },
    })
})