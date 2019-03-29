//Imports
const express = require('express')
const bodyParser = require('body-parser');

//Setup and configure app
const app = express()
const port = 5000

//import routes
const PSRoute = require('./routes/ps');

//route request middleware
app.use('/', PSRoute);


//Initialize app
app.listen(port, () => console.log(`Server listening on port ${port}!`))