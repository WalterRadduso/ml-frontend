import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import boom from 'express-boom';

import categoriesRoute from './routes/categories';
import descriptionsRoute from './routes/descriptions';
import itemsRoute from './routes/items';
import searchRoute from './routes/search';

// Init Express JS.
const app = express();

// Import .env variables
dotenv.config();

// Parse application/json
app.use(bodyParser.json());

// Add boom errors
app.use(boom());

// Routes
app.use(categoriesRoute);
app.use(descriptionsRoute);
app.use(itemsRoute);
app.use(searchRoute);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`API running at: localhost:${process.env.PORT}`);
});
