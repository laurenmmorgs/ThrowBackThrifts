const express = require('express');
const cors = require('cors');
const app = express();
// const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

//basic code 
// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200,
//   allowedHeaders: ['Content-Type'],
// };
// app.use(cors(corsOptions));


app.listen(8000, () => console.log("The server is all fired up on port 8000"));
//* user stuff 
require("./config/mongoose.config");
const cookieParser = require('cookie-parser')
require('dotenv').config();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin:'http://localhost:3000'}));

app.use(cookieParser())

const UserRoutes = require('./routes/userRoutes');
UserRoutes(app);

//this is for the item 

require('./config/mongoose.config');
require('./routes/item.routes')(app);



//grabs the uploads folder and stores the images to this folder 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



