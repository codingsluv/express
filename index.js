const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const categoriesRoute = require('./routes/categories');
const morgan = require('morgan');

//? cors
dotenv.config();

// ? middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(cors());

// ? routes categories
app.use('/api/v1/categories', categoriesRoute);



// ! server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});