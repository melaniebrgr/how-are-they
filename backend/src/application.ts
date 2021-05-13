import * as express from "express";

import {healthRouter} from "./domains/health/health.router"

const app = express();

app.use("/health", healthRouter)

export default app;
