import express from 'express';
import bodyParser from 'body-parser';
import * as mongoose from "mongoose";
import * as path from "path";
import routes from "./src/router/web.router";


const app = express();

const PORT = 3000
app.use(express.static("./src/public"));
app.set("view engine", "ejs");
app.set("views", "./src/views");


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use("/",routes)


app.listen(PORT, ()=>{
    console.log('server listening on port '+PORT);
});
