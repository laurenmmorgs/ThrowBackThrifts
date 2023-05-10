import React, {useState} from 'react'
import DisplayItems from '../components/ItemComp/DisplayItems'
import Nav from '../components/ItemComp/NavBars/Nav'
import Header from '../components/ItemComp/Header'

function Main(props) {

   const [item, setItem ] = useState([]);
   const [imageDetails, setImageDetails] = useState([]);


   return (
      <div> 
         <Nav /> 
         <Header /> 
         <DisplayItems imageDetails = { imageDetails} setImageDetails = {setImageDetails} item={item} setItem={setItem}  />
      </div>
   )
}

export default Main
