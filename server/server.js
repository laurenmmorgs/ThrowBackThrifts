const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');



const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type'],
};
app.use(cors(corsOptions));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



require('./config/mongoose.config');
require('./routes/item.routes')(app);

app.listen(8000, () => {
  console.log('Listening at Port 8000');
});


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


//! new

