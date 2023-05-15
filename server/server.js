const express = require('express');
const cors = require('cors');
const app = express();

const fs = require('fs');
const path = require('path');



app.listen(8000, () => console.log("The server is all fired up on port 8000"));
//* user stuff 
require("./config/mongoose.config");

require('dotenv').config();

app.use(express.json(), express.urlencoded({ extended: true }));

app.use(cors({credentials:true, origin:'http://localhost:3000'}));


const UserRoutes = require('./routes/userRoutes');
UserRoutes(app);

//this is for the item 

require('./config/mongoose.config');
require('./routes/item.routes')(app);



//grabs the uploads folder and stores the images to this folder 
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



