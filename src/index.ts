import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import userRoute from './routes/usersRoute';
import authRoute from './routes/authRoute';
import facilitatorRoute from './routes/facilitatorRoute';
import locationRoute from './routes/locationRoute';
import articlesRouter from './routes/articlesRoute';
import workshopsRouter from './routes/workshopsRoute';
import articleCategoriesRoute from './routes/articleCategoryRoute';
import paymentMethodRoute from './routes/paymentMethodRoute';
import plantCategoriesRoute from './routes/plantCategoryRoute';
import plantRoute from './routes/plantRoute';
import usePlantsRoute from './routes/userPlantsRoute';
import adminRoute from './routes/adminRoute';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.get('/', (req, res) => {
  res.send('🚀 API is running!');
});

app.use('/api', authRoute);
app.use('/api', userRoute);
app.use('/api', facilitatorRoute);
app.use('/api', locationRoute);
app.use('/api', articlesRouter);
app.use('/api', workshopsRouter);
app.use('/api', articleCategoriesRoute);
app.use('/api', paymentMethodRoute);
app.use('/api', plantCategoriesRoute);
app.use('/api', plantRoute);
app.use('/api', usePlantsRoute);
app.use('/api', adminRoute);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
