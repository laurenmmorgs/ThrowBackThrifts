const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const jwt = require("jsonwebtoken");

process.env.SECRET_KEY = "shhh-secret";

const cookieParser = require('cookie-parser');
app.use(cookieParser());
// Change the app.use(cors()) to the one below
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
        
app.use(cors());
app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/
require('./config/mongoose.config');    /* This is new */
require('./routes/user.routes')(app);
require('./routes/item.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})