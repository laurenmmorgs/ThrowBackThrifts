import React from 'react'
import backgroundImage from '../assets/Vintage.jpg'
import { Link } from "react-router-dom";

function Nav() {

   const style = {
      backgroundImage: `url(${backgroundImage})`
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
      </div>
      </div>
   )
}

export default Nav
