// we hve to create a model
const mongoose = require ('mongoose');

// define a schema 
const recipeSchema  = new mongoose.Schema({

    name :{
        type:String,
        required:true

    },
    ingredients:{
        type: [String],
        required:true
    },
    instructions: {
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// create the receipe   model from schema 
const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;