import express from "express";
import { getIndex, getRegister, getDetails, getDelete, postRegister } from "../controller/Controllador.js";

export const routers = express.Router();

routers.get("/", getIndex);
routers.get("/register", getRegister);
routers.post("/register", postRegister)
routers.get("/details/:id", getDetails);
routers.get("/delete/:id", getDelete);