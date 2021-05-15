import { RequestHandler } from 'express';

import database from "../../database";
import { RegularMedicationTakenAPI } from "./medication.types";

export const get: RequestHandler = (_, res, next) => {
  database
    .raw(`
      select * from events
      where care_recipient_id='df50cac5-293c-490d-a06c-ee26796f850d'
      and event_type='regular_medication_taken'
      order by timestamp desc;
    `)
    .then((data: RegularMedicationTakenAPI[][]) => {
      return res.json({
        data: data[0]
      });
    })
    .catch((error: Error) => next(error));
};

const medicationController = {
  get
}

export default medicationController;