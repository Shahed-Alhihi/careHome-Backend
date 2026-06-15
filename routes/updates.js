import express from "express";
import db from "../db.js";


const router=express.Router();

router.get("/",async(req,res)=>{
    const result=await db.query("SELECT updates.*, nurses.nurse_name FROM updates LEFT JOIN nurses ON updates.nurse_id=nurses.id ORDER BY updates.id");

    res.json(result.rows);
});


router.get("/:patinetId",async(req,res)=>{
    const result=await db.query("SELECT updates.*, nurses.nurse_name FROM updates LEFT JOIN nurses ON updates.nurse_id=nurses.id WHERE updates.patient_id=$1 ORDER BY updates.id",[req.params.patinetId]);
    res.json(result.rows);
});


router.post("/",async(req,res)=>{
    const{
         patient_id,
    nurse_id,
    update_date,
    update_time,
    notes
    }=req.body;

    const result=await db.query(
        `INSERT INTO updates(patient_id,
    nurse_id,
    update_date,
    update_time,
    notes) VALUES ($1,$2,$3,$4,$5)
    RETURNING *`,[patient_id,
    nurse_id,
    update_date,
    update_time,
    notes]
    );
    res.json(result.rows[0]);
});

export default router;