import * as express from "express";
import * as morgan from "morgan";

import {healthRouter} from "./domains/health/health.router";
import {errorHandler} from "./middleware/error";

const app = express();

app.use(morgan("tiny"));
app.use("/health", healthRouter)
app.use(errorHandler)

export default app;
