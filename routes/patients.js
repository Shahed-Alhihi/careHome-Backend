import express from "express";
import db from "../db.js";


const router=express.Router();

router.get("/",async(req,res)=>{
    const result=await db.query("SELECT * FROM patients ORDER BY id");
    res.json(result.rows);
});


router.get("/:id",async(req,res)=>{
    const result=await db.query("SELECT * FROM patients WHERE id= $1",[req.params.id,]);
    res.json(result.rows[0]);
});

router.post("/", async(req,res)=>{
    const{
        name,age,room, condition, admission_date,emergency_contact,image}=req.body;

        const result=await db.query(
            `INSERT INTO patients(name,age,room, condition, admission_date,emergency_contact,image) 
            VALUES ($1,$2,$3,$4,$5,$6,$7)
            RETURNING *`,
            [name,age,room, condition, admission_date,emergency_contact,image]);

            res.json(result.rows[0]);
});
router.delete("/:id", async(req,res)=>{
    await db.query("DELETE FROM patients WHERE id=$1 ",[req.params.id]);
    res.json({message:"Patient deleted"});
});


export default router;