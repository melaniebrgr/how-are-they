import app from '../src/application'
import * as request from 'supertest';

describe('health', () => {
  test('GET /health', async () => {
    await request(app)
      .get('/health')
      .expect(200)
      .expect((res) => {
        expect(res.body.ok).toBe('OK');
      });
  })
});
