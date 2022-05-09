import Sequelize from "sequelize";
import {connection} from "../database/connection.js";

export const moviesModel = connection.define('movies', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type : Sequelize.STRING,
        allowNull: false,
    },
    year: {
        type: Sequelize.SMALLINT,
        allowNull: false
    },
    poster_link: {
        type: Sequelize.STRING,
        allowNull: false
    },
    iframe_link:{
        type: Sequelize.STRING,
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    director: {
        type: Sequelize.STRING,
        allowNull: false
    },
    genre: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

<<<<<<< HEAD
const initTable = async() =>{
    moviesModel.sync()
};

initTable();
=======
const initTable = async() => {
    try{
        await filmes.sync()
    } catch (error){
        error.message
    }
}

initTable()
>>>>>>> 7c460a136963f7b1c1410c5bff9eb5cc0f3c2c06
