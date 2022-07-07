import express, { Request, Response } from "express"
import dotenv from "dotenv"
import cors from "cors"
import routerFighters from "./routers/routersFighters.js"

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use(routerFighters)

const {PORT} = process.env

app.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`)
})