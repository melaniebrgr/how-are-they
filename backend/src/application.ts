import * as express from "express";
import * as morgan from "morgan";

import {healthRouter} from "./domains/health/health.router"

const app = express();

app.use(morgan("tiny"));
app.use("/health", healthRouter)

export default app;
