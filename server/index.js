import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import authRouter from './routes/auth.routes.js';
import fileRouter from './routes/file.routes.js';
import corsMiddleware from './middleware/cors.middleware.js';

const app = express();
const PORT = config.get('serverPort');

app.use(corsMiddleware);
app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/files', fileRouter);

// function which connects to the db and run server
const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), { dbName: 'cloud' });

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

start();
