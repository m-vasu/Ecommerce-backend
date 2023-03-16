import express from "express";
import { AdminRouter } from "./routes";
import mongoose from "mongoose";
import {MONGODB_URI} from "./config";

const app = express()

app.use(express.json())

app.use('/api/admin',AdminRouter)

mongoose.connect(MONGODB_URI).then((result) =>{
        console.log("DB Connected");
        
}).catch((err) =>{
        console.log(err);
        
})


app.listen(3000,()=>{
        console.log("listening to port 3000");
})