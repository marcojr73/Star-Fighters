import { Request, Response } from "express";
import { battleLog, dataUser } from "../services/servicesFighter.js";
import { validateData } from "../middlewares/middlewareFighter.js";

import connection from "../config/bank.js";

export async function battle(req: Request, res: Response){
    try {
        const {firstUser} = req.body
        const {secondUser} = req.body

        const valid = await validateData(firstUser, secondUser)

        const repositoriesfirst = await dataUser(firstUser)
        const repositoriesSecond = await dataUser(secondUser)

        const battle =  await battleLog(repositoriesfirst, repositoriesSecond)
        
        return res.json(battle)
        
    } catch (error) {
        res.status(422).send(error)
    }
    
}

export async function ranking(req: Request, res: Response){

}