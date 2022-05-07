import { connection } from "../database/connection.js";
import {moviesModel} from "../model/movies.js"

export const getIndex = async (req, res) => {
    try {
        //const moviesList = await connection.query('SELECT * FROM movies',{
        //model: movies
        // })
        // console.log(moviesList)
        const movieList = await moviesModel.findAll();
        console.log(movieList);
        res.render("index.ejs", {movieList});
    } catch (error){
        res.send(error.message);
    }
}

export const getRegister = (req, res) =>{
    res.render("register.ejs");
}

export const getDetails = (req, res) =>{
    res.render("details.ejs");
}