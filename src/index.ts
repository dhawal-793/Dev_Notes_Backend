import { Application, NextFunction, Request, Response } from "express";

const express = require("express")

const app: Application = express();
const PORT = process.env.PORT || 5000;


app.use("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ data: "Hello World" })
})


app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);

})