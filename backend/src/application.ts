import * as express from "express";
import * as morgan from "morgan";

import {healthRouter} from "./domains/health/health.router";
import {medicationRouter} from "./domains/medication/medication.router";
import {errorHandler} from "./middleware/error";

const app = express();

app.use(morgan("tiny"));
app.use("/health", healthRouter)
app.use("/medication", medicationRouter)
app.use(errorHandler)

export default app;
