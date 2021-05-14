type RegularMedicationTaken = 'regular_medication_taken';

export interface RegularMedicationTakenAPI {
  payload: object;
  alert_id: null;
  task_instance_id: string;
  visit_id: string;
  caregiver_id: string;
  payload_as_text: object;
  rejected_event_id: null;
  observation_event_id: null;
  timestamp: string;
  id: string;
  event_type: RegularMedicationTaken;
  care_recipient_id: string;
}