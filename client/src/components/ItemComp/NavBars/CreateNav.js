import React from 'react'
import { Link } from "react-router-dom";


function OtherPages() {
   return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
         <a class="navbar-brand" href="#">ThrowBack Thrifts </a>             
               <li class="nav-item mx-auto">
                  <Link to="/" className="btn btn-primary" style={{ position: "absolute", right: 20}}>Back To Home Page</Link>
               </li>
      </div>
   </nav>
   )
}

export default OtherPages
