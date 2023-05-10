import React, {useState} from 'react'
import axios from 'axios'
import CreateItem from '../components/ItemComp/CreateItem';
import OtherPages from '../components/ItemComp/NavBars/CreateNav';
function Main(props) {

   const [itemDetails, setItemDetails] = useState([])
   const [imageDetails, setImageDetails] = useState([])


   return (
      <div> 
         <OtherPages /> 
        <CreateItem imageDetails = { imageDetails} setImageDetails = {setImageDetails}  itemDetails = { itemDetails } setItemDetails={ setItemDetails } />  
      </div>
   )
}

export default Main
