const { gql } = require('apollo-server');
//graphql functions
module.exports = gql`
  type Recipe {
    name: String
    description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
  }

  input RecipeInputs {
    name:String
    description: String
  }

  type Query {
    recipe(ID:ID!):Recipe!
    getRecipes(amount:Int): [Recipe]
  }

  type Mutation {
    createRecipe(recipeInputs:RecipeInputs):Recipe!
    deleteRecipe(ID:ID!) : Boolean
    editRecipe(ID:ID!,recipeInput : RecipeInputs):Boolean
  }
`;
