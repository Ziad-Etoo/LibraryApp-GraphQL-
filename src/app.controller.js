import cors from "cors"
import DBConnection from "./DB/DBconnection.js"
import { schema } from "./modules/graphql.schema.js";
import { globalErrorHandler } from "./utils/index.js"
import { createHandler } from 'graphql-http/lib/use/express';
// import expressPlayground from 'graphql-playground-middleware-express' 

const bootstrap = (app, express)=>{
    //use cors middleware
    app.use(cors())
    
    // parsing data
    app.use(express.json())

    //connect database 
    DBConnection()

    //graphql
    app.use("/graphql", createHandler({ schema: schema }));
    // app.get('/playground', expressPlayground.default({ endpoint: '/graphql' }))

    //unHandle routes 
    app.use("/{*any}",(req,res,next)=>{
        return next(new Error("page not found",{cause: 404}))
    })

    //global error handler
    app.use(globalErrorHandler)
}

export default bootstrap