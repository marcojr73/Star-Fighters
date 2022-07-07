
import { NextFunction } from "express";
import namesSchema from "../schemas/schemas.js";

export async function validateData(firstUser, secondUser){
    
    const valid = await namesSchema.validateAsync({firstUser, secondUser})
    if(!valid){
        throw {
        type: 422,
        message: "informações não enviadas"
        }
    }
}