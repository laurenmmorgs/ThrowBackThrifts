import React, {useState} from 'react'
import CreateItem from '../components/ItemComp/CreateItem';
function Main(props) {

   const [itemDetails, setItemDetails] = useState([])
   const [imageDetails, setImageDetails] = useState([])


   return (
      <div> 
        <CreateItem imageDetails = { imageDetails} setImageDetails = {setImageDetails}  itemDetails = { itemDetails } setItemDetails={ setItemDetails } />  
      </div>
   )
}

export default Main
