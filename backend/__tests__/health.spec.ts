import * as request from 'supertest';

describe('health', () => {
  test('GET /health', async () => {
    await request('http://localhost:8000/health/')
      .get('')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect((res) => {
        expect(res.body.ok).toBe('OK');
      });
  })
});
