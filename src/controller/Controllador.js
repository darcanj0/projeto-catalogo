import { connection } from "../database/connection.js";
import {moviesModel} from "../model/movies.js";
// import Sequelize from "sequelize";

// const Op = Sequelize.Op;
const orderById = {order: [["id", "ASC"]]}
export const getIndex = async (req, res) => {
    try {
        //const moviesList = await connection.query('SELECT * FROM movies',{
        //model: movies
        // })
        // console.log(moviesList)
        const movieList = await moviesModel.findAll(orderById);
        console.log(movieList);
        res.render("index.ejs", {movieList});
    } catch (error){
        res.send(error.message);
    }
}

export const getRegister = (req, res) =>{
    res.render("register.ejs", {toggle: false});
    console.log(req.body);
}

export const postRegister = async (req, res) => {
    console.log(req.body);
    const {name, year, poster_link, iframe_link, duration, director, genre} = req.body;
    try{
        if(!name || !year || !poster_link || !iframe_link || !duration || !director || !genre){
            res.send("You must fill all the form fields");
        } else {
            // await connection.query(`INSERT INTO movies (name, year, poster_link, iframe_link, duration, director, genre) VALUES ('${name}', ${year}, '${poster_link}', '${iframe_link}', ${duration}, '${director}', '${genre}');`);
            await moviesModel.create({name, year, poster_link, iframe_link, duration, director, genre});
            res.render("/register", {toggle: true});
        }
    } catch (error) {
        res.send(error.message);
    }
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

export const getEdit = async (req, res) => {
    try{
        const currentFilm = await moviesModel.findByPk(req.params.id);
        res.render("edit.ejs", {currentFilm});
    } catch(error){
        res.send(error.message)
    }
}

export const postEdit = async (req, res) => {
    try{
        const {name, year, poster_link, iframe_link, duration, director, genre} = req.body;
        // await connection.query(`UPDATE movies SET...`)
        await moviesModel.update({
            name: name,
            year: year,
            poster_link: poster_link,
            iframe_link: iframe_link,
            duration: duration,
            director: director,
            genre: genre
        }, {
            where: {
                id : req.params.id
            }
        })
        res.redirect("/");
    } catch (error){
        res.send(error.message);
    }
}

// export const searchByName = async (req, res) => {
//     try{
//         const movie = await moviesModel.findAll(
//             {
//                 where: {name: {
//                     [Op.like]: `%${req.body.movie}%`
//                 }}
//             }
//         )

//         if(movie.length == 0){
//             alert("No movies found in this search");
//         }

//         console.log(movie);
//         res.render("index.ejs", {
//             moviesModel
//         });
//     } catch (error) {
//         res.send(error.message)
//     }
// }