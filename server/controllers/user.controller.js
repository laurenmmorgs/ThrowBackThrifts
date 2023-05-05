const { model } = require('mongoose');
const User = require('../models/user.model');    /* this is new */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

   module.exports.register = (req, res) => {
      User.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
   }


   
module.exports.login = async (req, res) => {
   const user = await User.findOne({ email: req.body.email });
 
   if(user === null) {
       // email not found in users collection
       return res.sendStatus(400);
   }

   // if we made it this far, we found a user with this email address
   // let's compare the supplied password to the hashed password in the database
   const correctPassword = await bcrypt.compare(req.body.password, user.password);

   if(!correctPassword) {
       // password wasn't a match!
       return res.sendStatus(400);
   }

   // if we made it this far, the password was correct
   const userToken = jwt.sign({
       id: user._id
   }, process.env.SECRET_KEY);

   // note that the response object allows chained calls to cookie and json
   res
       .cookie("usertoken", userToken, {
           httpOnly: true
       })
       .json({ msg: "success!" });
 };

module.exports.findAllUsers = (req, res) => {
    User.find()
        .then((allDaUsers) => {
            res.json({ users: allDaUsers })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

  module.exports.UpdatedRegister = (req, res) => {
   User.create(req.body)
     .then(user => {
         const userToken = jwt.sign({
             id: user._id
         }, process.env.SECRET_KEY);
  
         res
             .cookie("usertoken", userToken, {
                 httpOnly: true
             })
             .json({ msg: "success!", user: user });
     })
     .catch(err => res.json(err));
 }
 module.exports.logout = (req, res) => {
   res.clearCookie('usertoken');
   res.sendStatus(200);
}

