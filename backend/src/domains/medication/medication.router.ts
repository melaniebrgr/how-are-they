import * as express from "express";

import medicationController from "./medication.controller"

export const medicationRouter = express.Router();

medicationRouter.get("", medicationController.get);