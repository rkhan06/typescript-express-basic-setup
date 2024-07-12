import { Application, Request, Response } from "express";
import express from "express";
import morgan from "morgan";

const app: Application = express();

app.use(morgan("combined"));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
