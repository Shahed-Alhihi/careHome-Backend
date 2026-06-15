import express from "express";
import db from "../db.js";


const router=express.Router();

router.get("/",async(req,res)=>{
    const result=await db.query("SELECT * FROM events ORDER BY id");
    res.json(result.rows);
});


router.get("/:patinetId",async(req,res)=>{
    const result=await db.query("SELECT * FROM events WHERE patient_id= $1",[req.params.patinetId]);
    res.json(result.rows);
});


export default router;