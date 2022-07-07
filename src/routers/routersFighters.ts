import { Router } from "express"
import { battle, ranking } from "../controllers/controllerFighter.js"

const routerFighters = Router()

routerFighters.post("/battle", battle)
routerFighters.get("/ranking", ranking)

export default routerFighters