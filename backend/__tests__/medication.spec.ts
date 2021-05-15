import * as request from 'supertest';

describe('medication', () => {
  test('GET /medication', async () => {
    await request('http://localhost:8000/medication/')
      .get('df50cac5-293c-490d-a06c-ee26796f850d')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body).not.toHaveLength(0);
        expect(res.body[0]).toMatchObject({
          payload: expect.any(String),
          alert_id: null,
          task_instance_id: expect.any(String),
          visit_id: expect.any(String),
          caregiver_id: expect.any(String),
          payload_as_text: expect.any(String),
          rejected_event_id: null,
          observation_event_id: null,
          timestamp: expect.any(String),
          id: expect.any(String),
          event_type: 'regular_medication_taken',
          care_recipient_id: expect.any(String),
        });
      });
  })
});
