import React, {useState} from 'react'
import DisplayItems from '../components/DisplayItems'
import Nav from '../components/Nav'
import axios from 'axios'

function Main(props) {

   const [item, setItem ] = useState([]);
   const [imageDetails, setImageDetails] = useState([]);


   return (
      <div> 
         <Nav /> 
         <DisplayItems imageDetails = { imageDetails} setImageDetails = {setImageDetails} item={item} setItem={setItem}  />
      </div>
   )
}

export default Main
