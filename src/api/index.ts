import { Hono } from 'hono';

const app = new Hono();

app.get('/api/test', (c) => {
  return c.text('Hello from Hono!');
});
export const fetch = app.fetch;

export default app;