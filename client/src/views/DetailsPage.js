import React, {useState} from 'react'
import ItemDetails from '../components/ItemComp/ItemDetails';
import DetailsNav from '../components/ItemComp/NavBars/DetailsNav';




function DetailsPage() {


   const [item, setItem ] = useState([]);
   const [imageDetails, setImageDetails] = useState([]);
   const [itemDetails, setItemDetails] = useState([])




   return (

      
      <div>
      <DetailsNav /> 
      <ItemDetails itemDetails = { itemDetails } setItemDetails={ setItemDetails }/>
      </div>
   )
}

export default DetailsPage
