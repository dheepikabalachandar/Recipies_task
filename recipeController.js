// import the recipe model

const Recipe = require ("../models/recipeModel");

// create new receipe 
exports.createRecipe = async (req,res)=>{
    try
    {
         const newRecipe = new Recipe(req.body); // create new receipe from req body
         await newRecipe.save();
         res.status(201).json(newRecipe);

    }catch(error){
        res.status(400).json({message:"Not created",error})
        
    }
    
}

// exports.getAllRecipes = async (req,res)=>{
//     try
//     {
//          const recipes = await Recipe.find() // to find the recipedata 
         
//          res.status(200).json(recipes);

//     }catch(error){
//         res.status(500).json({message:"Error fetchiing the receipes",error})
        
//     }
    
// }