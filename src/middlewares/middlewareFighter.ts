import { Request, Response } from "express";
import namesSchema from "../schemas/schemas.js";

export async function validateData(req, res){
    const {firstUser} = req.body
    const {secondUser} = req.body

    const valid = await namesSchema.validateAsync({firstUser, secondUser})
    if(!valid) return res.status(401)
}