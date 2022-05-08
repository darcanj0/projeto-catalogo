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

export const getDetails = async (req, res) =>{
    try{
        // const filmDetails = await connection.query (`SELECT * FROM movies WHERE ID =${req.params.id};`)
        const filmDetails = await moviesModel.findByPk(req.params.id);
        console.log(req.params.id);
        console.log(filmDetails);
        res.render("details.ejs", {filmDetails});
    } catch (error){
        res.send(error.message);
    }
}

export const getDelete = async (req, res) => {
    try{
        // await connection.query(`DELETE FROM movies WHERE ID = ${req.params.id}`);
        await moviesModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect ('/')
    } catch (error) {
        res.send(error.message)
    }
}