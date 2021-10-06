const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const URL = "mongodb+srv://zander0:popskull@graphqldb.48agp.mongodb.net/GraphqlDB?retryWrites=true&w=majority"

mongoose.connect(URL,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => console.log("Db Connected"))

const startServer = async () => {
    const app = express()
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await apolloServer.start()
    apolloServer.applyMiddleware({app:app})
    app.listen(4002, () => console.log("Server running on port 4002"))
}
startServer()