import React from 'react'
import backgroundImage from '../assets/header.jpg'
import { Link } from "react-router-dom";
import logo from '../assets/Logo.png'

function Nav() {

   const style = {
      backgroundImage: `url(${backgroundImage})`,
      logo: `url(${logo})`
   }


   return (


      <div style={{
         backgroundImage: `url(${backgroundImage})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center center',
         height: '300px',
      }} className='mb-5 bd-highlight rounded'>
         <div className='header'>
            <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme = "dark">
               <div class="container-fluid">
                  <a class="navbar-brand" href="#">ThrowBack Thrifts </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="navbar-nav">
                        <li class="nav-item">
                           <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                           <Link to="/addItem" className="btn btn-primary" style={{ position: "absolute", right: 0 }}>List an item</Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </nav>
            <img src={`${logo}`} style={{ position: "absolute", left: 0, height: "200px", width: "300px" }} />
            <h3 className='text-center text-light'>  Free Shipping Over $70 </h3> 
         </div>
      </div>
   )
}

export default Nav
