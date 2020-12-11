import express, { Request, Response, NextFunction, Router } from "express";
import { GetVandorByID } from "../controllers";
import { GetVandor } from "../controllers";
import { CreateVandor } from "../controllers";


const router = express.Router();


router.post("/vandor", CreateVandor)

router.get("/vandors", GetVandor)

router.get("/vandor/:id", GetVandorByID)


router.get("/", (req: Request, res: Response, next: NextFunction) => {


  res.json({ message: "hello from admiin"})
})


export { router as AdminRoute }