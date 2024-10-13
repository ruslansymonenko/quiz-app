import express from 'express';
import router from './routes/router';
import dotenv from 'dotenv';
import errorHandler from './middlewares/errorHandler.middleware';

dotenv.config();

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
