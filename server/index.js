import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import searchRoute from './routes/search';

// Init Express JS.
const app = express();

// Import .env variables
dotenv.config();

// parse application/json
app.use(bodyParser.json());

// Use Routes
app.use(searchRoute);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`API running at: localhost:${process.env.PORT}`);
});
