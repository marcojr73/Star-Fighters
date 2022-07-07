import { Request, Response } from "express";
import connection from "../config/bank.js";

export async function battle(req: Request, res: Response){
    const mar = await connection.query(`SELECT * FROM fighters`)
    console.log(mar)
    res.send(mar)
}

export async function ranking(req: Request, res: Response){
    const mar = await connection.query(`SELECT * FROM fighters`)
    console.log(mar)
    res.send(mar)
}