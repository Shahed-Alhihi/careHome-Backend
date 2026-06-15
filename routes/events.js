import express from "express";
import db from "../db.js";


const router=express.Router();

router.get("/",async(req,res)=>{
    const result=await db.query("SELECT * FROM events ORDER BY id");
    res.json(result.rows);
});


router.get("/:patinetId",async(req,res)=>{
    const result=await db.query("SELECT * FROM events WHERE patient_id= $1 ORDER BY id",[req.params.patinetId]);
    res.json(result.rows);
});


router.post("/",async(req,res)=>{
    const{
        patient_id,
    title,
    event_description,
    event_date ,
    event_time ,
    event_status,
    }=req.body;

    const result=await db.query(
        `INSERT INTO events(patient_id,
    title,
    event_description,
    event_date ,
    event_time ,
    event_status) VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *`,[
        patient_id,
    title,
    event_description,
    event_date ,
    event_time ,
    event_status
    ]
    );
    res.json(result.rows[0]);
});


router.delete("/:id",async(req,res)=>{
    await db.query("DELETE FROM events WHERE id=$1", [req.params.id]);
    res.json({message:"Event deleted"});
});


export default router;