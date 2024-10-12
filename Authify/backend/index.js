import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();

app.get("/", (request, response)=>{
    response.send("Hello, World 0823CS191014");
});

app.use("/api/auth", authRoutes)
app.listen(3000, ()=>{
    connectDB();
    console.log("Server Started at port 3000");
});

// dJGHnSAOtG16TUO2
