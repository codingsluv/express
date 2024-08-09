const express = require('express');
const app = express();
const port = 3000;
const categoriesRoute = require('./routes/categories');

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// ? middleware
app.use(express.json());

// ? routes categories
app.use('/api/v1/categories', categoriesRoute);



// ! server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});