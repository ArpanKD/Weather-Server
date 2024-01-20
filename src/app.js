import express from 'express';
import cors from 'cors';
import weatherRouter from './routes/weather.route.js';

const app = express();

app.use(express.static('public'));
app.use(express.json({ extended: true }));
app.use(cors());

app.use('/api', weatherRouter);

export default app;
