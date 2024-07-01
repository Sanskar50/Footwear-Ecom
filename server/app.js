const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cartRoutes= require('./routes/cartRoutes');
const userRoutes=require('./routes/userRoutes');
const requireAuth=require('./middleware/requireAuth');
require('dotenv').config()

const app = express();

app.use(express.json()); 



// Routes
app.use(cors());
app.use(requireAuth);
app.use('/cart', cartRoutes);
app.use('/user', userRoutes);



mongoose.connect(process.env.MONGO-URL)
.then(()=>{
  app.listen(4000, () => {
    console.log(`Server is running on port ${4000}`);
  });
}).catch((err)=>{
  console.log("Error connecting to database");
})


