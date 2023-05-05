import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (props) => {

   const navigate = useNavigate();

   const { userDetails, setUserDetails } = props;

   const [user, setUser] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password : ''
   })

   const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log(user)
      axios
      .post("http://localhost:8000/api/register", user)
      .then((res) => {
         console.log("post data", res.data)
         setUserDetails([...userDetails, res.data])
         navigate("/login")
      })
   }


   const changeHandler = (e) => {
      setUser({...user, [e.target.name]:e.target.value
      })
   }

    return (
        <div> 
         <form className="signUp" onSubmit={handleSubmit}>
            <h3> Sign Up! </h3>
               <label> First Name: </label>
               <input type="text" onChange={changeHandler} name="firstName" value={user.firstName} /> 

               <label> Last Name: </label>
               <input type="text" onChange={changeHandler}  name="lastName" value={user.lastName}/> 

               <label> Email: </label>
               <input type="Email" onChange={changeHandler} name="email" value={user.email} /> 

               <label> Password: </label>
               <input type="password" onChange={changeHandler}  name="password" value={user.password}/> 

               <label> Confirm Password: </label>
               <input type="password" onChange={changeHandler}  name="confirmPassword"/> 

               <button> Sign Up</button>
         </form>
        </div>
    );
  };
export default Register;
