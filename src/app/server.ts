// src/app/server.ts
import express from 'express';
import { POST } from './api/count/TSroute';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Define your API routes
app.post('/api/count', POST);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
