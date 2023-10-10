const {gql} = require('apollo-server');

module.exports=gql
type Recipe {
    name:String,
    description:String,
    createdAt:String,
    thumbsUp:Int,
    thambsDown:Int
};