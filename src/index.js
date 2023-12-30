require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('../routes/productRoutes')
const app = express();
const cors = require('cors');
const  errorMiddleware = require('../middleware/errorMiddleware')

const MONGO_URL = process.env.MONGO_URL
const FRONTEND = process.env.FRONTEND
const PORT = process.env.PORT || 3000

const corsOptions = {
    origin: FRONTEND ,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors(corsOptions))

app.use('/api/products',productRoutes)

app.use(errorMiddleware)

app.get('/', (req, res) => {
    throw new Error('custom error')
});


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('Mongo db Connected!')
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
      });
      
  }
)
  .catch((error)=> console.log(error.message))

