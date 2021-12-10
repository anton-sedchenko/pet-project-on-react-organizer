import express from 'express';
import mongoose from 'mongoose';
import config from 'config';

const app = express();
const PORT = config.get('serverPort');

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
