import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

connectDB();

app.get("/",(req,res)=>
    res.send("<h1>hello from server</h1>"))


app.listen(ENV.PORT,()=>
    console.log("server is running on port :",ENV.PORT));
