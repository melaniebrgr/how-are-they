import { RequestHandler } from 'express';

import database from "../../database";
import { RegularMedicationTakenAPI } from "./medication.types";

export const get: RequestHandler = (req, res, next) => {
  database('events')
    .where({
      care_recipient_id: req.params.id,
      event_type: 'regular_medication_taken'
    })
    .orderBy('timestamp')
    .select()
    .then((data: RegularMedicationTakenAPI[][]) => {
      return res.json(data);
    })
    .catch((error: Error) => next(error));
};

const medicationController = {
  get
}

export default medicationController;