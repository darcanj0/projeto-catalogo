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

function initTable(){
    moviesModel.async()
}

initTable()