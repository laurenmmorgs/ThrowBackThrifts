import React, {useState} from 'react'
import DisplayItems from '../components/ItemComp/DisplayItems'
import Nav from '../components/ItemComp/NavBars/Nav'
import Header from '../components/ItemComp/Header'
import About from '../components/ItemComp/About/About'

function Main(props) {

   const [item, setItem ] = useState([]);
   const [imageDetails, setImageDetails] = useState([]);


   return (
      <div> 
         <Nav /> 
         <Header /> 
         <DisplayItems imageDetails = { imageDetails} setImageDetails = {setImageDetails} item={item} setItem={setItem}  />
         <About /> 
      </div>
   )
}

export default Main
