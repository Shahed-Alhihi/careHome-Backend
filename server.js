import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import db from "./db.js";


import patientRoutes from "./routes/patients.js";
import medicineRoutes from "./routes/medicines.js";
import updateRoutes from "./routes/updates.js";
import eventRoutes from "./routes/events.js";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/patients",patientRoutes);
app.use("/api/medicines",medicineRoutes);
app.use("/api/updates",updateRoutes);
app.use("/api/events",eventRoutes);
app.use("/api/auth",authRoutes);

app.get("/",(req,res)=>{
    res.send("CareHome API is running")
});

db.connect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on: ${PORT}`);
    });
});