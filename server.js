const express = require ("express");
const connectDB = require("./config/db");
const bodyparser = require ("body-parser");// import bodyparser to handle json bodies or req 
const recipeRoutes = require("./routes/recipeRoutes");

// initialize env variables
require("dotenv").config(); // it will load the environment varaibles from .env file 

const app = express();

// middleware to parse json 

app.use (bodyparser.json());


// connect mongodb database
connectDB();

// routes
app.use("/api/recipes",recipeRoutes);

const PORT  = process.env.PORT || 6666;
app.listen(PORT ,() => {
    console.log("server is runing is at the url https://localhost:6666")
})