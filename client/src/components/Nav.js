import React from 'react'
import backgroundImage from '../assets/Vintage.jpg'
import { Link } from "react-router-dom";
import logo from '../assets/ThrowBackThriftsLogo.png'

function Nav() {

   const style = {
      backgroundImage: `url(${backgroundImage})`,
      logo : `url(${logo})`
   }


   return (
      
      <div style={{ 
         backgroundImage: `url(${backgroundImage})`, 
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center center',
         height: '300px' }} className='mb-5 bd-highlight'> 
         <div className='header'> 
      <Link to="/addItem" className="btn btn-primary" style={{ position: "absolute", right: 0 }}>Add an item</Link>
      <img src={`${logo}`} style={{ position: "absolute", left: 0, height:"120px" }} /> 
      </div>
      </div>
   )
}

export default Nav
