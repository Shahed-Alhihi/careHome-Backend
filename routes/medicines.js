import express from "express";
import db from "../db.js";


const router=express.Router();

router.get("/",async(req,res)=>{
    const result=await db.query("SELECT * FROM medicines ORDER BY id");
    res.json(result.rows);
});


router.get("/:patinetId",async(req,res)=>{
    const result=await db.query("SELECT * FROM medicines WHERE patient_id= $1",[req.params.patinetId]);
    res.json(result.rows);
});

router.post("/", async(req,res)=>{
    const{
        patient_id,
    medicine_name,
    dosage,
    medicine_time,
    notes}=req.body;

        const result=await db.query(
            `INSERT INTO medicines(patient_id,
    medicine_name,
    dosage,
    medicine_time,
    notes) 
            VALUES ($1,$2,$3,$4,$5)
            RETURNING *`,
            [patient_id,
    medicine_name,
    dosage,
    medicine_time,
    notes]);

            res.json(result.rows[0]);
});



router.put("/:id", async(req,res)=>{
    const {medicine_name,
    dosage,
    medicine_time,
    notes}=req.body;

    const result=await db.query(
            `UPDATE medicines(medicine_name=$1,
    dosage=$2,
    medicine_time=$3,
    notes=$4 WHERE id=$5
    RETURNING `,
[medicine_name,
    dosage,
    medicine_time,
    notes,req.params.id]
);

res.json(result.rows[0]);

});


router.delete("/:id",async(req,res)=>{
    await db.query("DELETE FROM medicines WHERE id=$1",[req.params.id]);
    res.json({message: "Medicine deleted"});
});

export default router;