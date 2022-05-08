import express from "express";
import { getIndex, getRegister, getDetails, getDelete } from "../controller/Controllador.js";

export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/register", getRegister);
routers.get("/details/:id", getDetails);
routers.get("/delete/:id", getDelete);