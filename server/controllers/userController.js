const User = require('../models/userModel')
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken') //this creates cookies 
const bcrypt = require('bcrypt')

//async instead of .then and .catch => nicer code


module.exports = {
    registerUser: async (req, res) => {
        try{
            // * Check if the email that was entered in the reg form is already in the DB
            const potentialUser = await User.findOne({email:req.body.email})
            if(potentialUser){
                res.status(400).json({message: 'That email already exists please login'})
            }else{
                // * create user
                const newUser = await User.create(req.body);

                // * Generating a usertoken and storing the id and email of the newly created user //this expires in 2 hours
                const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, secret, {expiresIn:'2h'})
                console.log(userToken);
                // * Sending user data back to the client                                 //this is 2hrs
                res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge:2 * 60 * 60 * 1000}).json(newUser);
            }
        }
        catch(err){
            
        }
    }
   }
