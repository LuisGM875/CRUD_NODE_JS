import express from 'express';
const app = express();

import { PORT } from './config.js';
import helloRoutes from "./routes/hello.route.js";

app.use('/api/v1', helloRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port',3000);
});