import express from "express";
import cors from "cors";
import {clerkMiddleware} from "@clerk/express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

connectDB();

app.get("/",(req,res)=>
    res.send("<h1>hello from server</h1>"))

app.use("/api/users",userRoutes)

const startServer = async()=>{
    try {
        await connectDB();
        app.listen(ENV.PORT,()=>
        console.log("server is running on port :",ENV.PORT));
    } catch (error) {
        console.error("error in starting server :",error.message);
        process.exit(1);
    }
};


startServer();