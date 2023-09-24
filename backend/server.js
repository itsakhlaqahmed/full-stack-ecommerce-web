import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import colors from 'colors'

dotenv.config();
const port = process.env.PORT || 5000;



connectDB();

const app = express();

app.use(cors());

// app.get('/', (req, res) => {
//     res.send('Api running');
// });

app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);


app.listen(port, () => console.log(`Server running on port ${port}`.green.inverse))