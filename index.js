import express from "express";
import dotenv from "dotenv";
import {routers} from './src/routers/routers.js';
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve(path.dirname(""));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));
app.listen(PORT, () => console.log(`Server in http://localhost:${PORT}`));