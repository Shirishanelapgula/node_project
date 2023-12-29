require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
var cors = require('cors');

const  errorMiddleware = require('../middleware/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

const mongoose = require('mongoose');

const productRoutes = require('../routes/productRoutes')

const MONGO_URL = process.env.MONGO_URL


app.use('/api/products',productRoutes)

app.use(errorMiddleware)

const FRONTEND=process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
    throw new Error('custom error')


//   res.send('Hello, shirisha!');
});

// Start the Express server





mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Mongo db Connected!')
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
      });
      
  }
)
  .catch((error)=> console.log(error.message))

