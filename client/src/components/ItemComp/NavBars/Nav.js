import React from 'react'
import backgroundImage from '../assets/header.jpg'
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'

function Nav() {


   return (


      <div style={{
         backgroundImage: `url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center center',
         height: '300px',
      }} className='mb-5 bd-highlight rounded'>
         <div className='header'>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme = "dark">
               <div className="container-fluid">
                  <a className="navbar-brand" href="/">ThrowBack Thrifts </a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav">
                        <li className="nav-item">
                           <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="/register">SignUp</a>
                        </li>
                        <li className="nav-item">
                           <Link to="/addItem" className="btn btn-primary" style={{ position: "absolute", right: 0 }}>List an item</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <img src={`${logo}`} style={{ position: "absolute", left: 0, height: "200px", width: "300px" }} alt="imageLogo" />
            <h3 className='text-center text-light'>  Free Shipping Over $70 </h3> 
         </div>
      </div>
   )
}

export default Nav
