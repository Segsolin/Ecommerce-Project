const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');
const cors = require('cors');

dotenv.config();

const app = express();

//connects us to the MongoDB
mongoose.connect(
    process.env.DATABASE, 
    { useNewUrlParser: true, useUnifiedTopology: true },
err => {
    if (err) {
        console.log(err);
    } else {
        console.log("connected to the database")
    }
});

//Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({ extended: false }));

//requires api
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");
const userRoutes = require("./routes/auth");

app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", ownerRoutes);
app.use("/api", userRoutes);



app.listen(3000, '127.0.0.1', err => {
    if (err) {
        console.log(error);
    }
    else {
        console.log("Listening to PORT", 3000)
        
    }
});
