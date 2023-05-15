import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
const Register = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    // !SubmitHandler

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
            .then((res) => {
                console.log(res);
                navigate('/dashboard')
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='mx-auto col-10 col-md-8 col-lg-6 border mt-3'>
          <Link to="/" className="btn btn-primary" style={{ position: "absolute", right: 20}}>Back To Home Page</Link>
            <form onSubmit={submitHandler} className='text-center'>
                <div className="form-group">
                    <label >First Name: </label>
                    <input  className="form-control" type="text" onChange={changeHandler} value={user.firstName} name='firstName'/>
                </div>
                <div className="form-group">
                    <label className="form-label" > Last Name: </label>
                    <input   className="form-control" type="text" onChange={changeHandler} value={user.lastName} name='lastName'/>
                </div>
                <div className="form-group">
                    <label className="form-label">Email: </label>
                    <input className="form-control" type="text" onChange={changeHandler} value={user.email} name='email'/>
                </div>
                <div className="form-group">
                    <label className="form-label">Password: </label>
                    <input  className="form-control" type="password" onChange={changeHandler} value={user.password} name='password'/>
                </div>
                <div>
                    <label className="form-label">Confirm Password: </label>
                    <input   className="form-control"type="password" onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
                </div>
                <button className='btn btn-primary'>Register</button>
            </form>
            <Link to={'/login'}>Already have an account?</Link>
        </div>
)}

export default Register;