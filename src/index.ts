import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRoute from './routes/usersRoute';
import authRoute from './routes/authRoute';
import cors from 'cors';
import facilitatorRoute from './routes/facilitatorRoute';
import locationRoute from './routes/locationRoute';
import path from 'path';
import fs from 'fs';
import articlesRouter from './routes/articlesRoute';
import wokrshopRouter from './routes/workshopsRoute';

dotenv.config();

const app = express();

const PORT = 2000;

app.use(bodyParser.json());

app.use(cors());

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
app.use('/api', authRoute);
app.use('/api', userRoute);
app.use('/api', facilitatorRoute);
app.use('/api', locationRoute);
app.use('/api', articlesRouter);
app.use('/api', wokrshopRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
