import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (request, response)=>{
    response.send("Hello, World 0823CS191014");
});

app.use(express.json()); // allows us to parse incoming requests:req.body;

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log("Server Started at port:", PORT);
});

// dJGHnSAOtG16TUO2
