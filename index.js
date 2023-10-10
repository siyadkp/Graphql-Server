const {AppolloServer} =require('apollo-server')
const mongoose =require('mongoose')

const MONGODB ="mongodb+srv://siyad:123@cluster0.3xrfwxx.mongodb.net/?retryWrites=true&w=majority"

const typeDefs= require('./graphql/typeDefs');
const resolvers=require('./graphql/resolvers')

const server = new AppolloServer({
    typeDefs,
    resolvers
})

mongoose.connect(MONGODB,{useNewUriParser:true}).then(()=>{
    console.log("MongoDB Connection successful");
    return server.listen({port:5000})
})
.then((res) => {
    console.log(`Server running at ${res.url}`)
})