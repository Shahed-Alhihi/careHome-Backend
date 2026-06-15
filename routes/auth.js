import express from "express";
import db from "../db.js";


const router=express.Router();

router.post("/login",async(req,res)=>{
    const {username, password}=req.body;

    const result=await db.query(
        "SELECT * FROM users WHERE username =$1 AND user_password=$2",[username, password]);

        if(result.rows.length===0){
            return res.status(401).json({message: "Invalid username or password"});
        }

        res.json(result.rows[0]);
    
});

export default router;