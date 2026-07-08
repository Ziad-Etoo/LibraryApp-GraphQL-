import { loginType, MessageType, signUpType, userType } from "./type.js";
import * as UR from "./resolve.js";
import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const userMutation = {
    signUp : {
        type:signUpType,
        args:{
            name: { type:new GraphQLNonNull(GraphQLString) },
            email: { type:new GraphQLNonNull(GraphQLString) },
            password: { type:new GraphQLNonNull(GraphQLString) },
            confirmPassword: { type:new GraphQLNonNull(GraphQLString) },
            phone: { type:new GraphQLNonNull(GraphQLString) },
        } ,
        resolve: UR.signUp
    },
    loginUser: {
        type: loginType,
        args: {
            email: { type:new GraphQLNonNull(GraphQLString) },
            password: {  type:new GraphQLNonNull(GraphQLString)},
        },
        resolve: UR.loginUser
    },
    deleteUser : {
        type: MessageType,
        args:{
            authentication: { type:new GraphQLNonNull(GraphQLString) }
        } ,
        resolve: UR.deleteUser
    },
}