import { Request, Response } from "express";
import { dataUser } from "../services/servicesFighter.js";
import { validateData } from "../middlewares/middlewareFighter.js";

import connection from "../config/bank.js";

export async function battle(req: Request, res: Response){
    try {
        const {firstUser} = req.body
        // const {secondUser} = req.body

        // validateData(firstUser, secondUser)

        const repositoriesfirst = await dataUser(firstUser)
        // const repositoriesSecond = await dataUser(secondUser)
        // console.log(repositoriesfirst)
        return res.json(repositoriesfirst)
        
    } catch (error) {
        console.log(error)
    }
    
}

export async function ranking(req: Request, res: Response){
    const test = await connection.query(`SELECT * FROM fighters`)
    console.log(test)
    res.send(test)
}