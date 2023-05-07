import {React ,useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
// import backgroundImage from '../assets/vintage.jpg'

const DisplayItems = () => {
   
   const [items, setItems] = useState([]);

   // const style = {
   //    backgroundImage: `url(${backgroundImage})`
   // }

   
   useEffect(() => {
      axios
        .get("http://localhost:8000/api/allItems")
        .then((res) => {
          console.log("this is the display data", res.data.items);
          setItems(res.data.items);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
   return (
      <div className='wrapper'>

   
      <div className='row d-flex justify-content-center mt-auto20'>


         {
            items.map((item) =>
            (
               <div key={item._id} className='card border border-primary p-2 mx-2 mb-4 w-25' > 
               <div className='text-center'> 
               <h1> Image here </h1>
               <img src={item.image}class="card-img-top" alt="..."/>
               <div className='card-body'> 
               <Link className='card-title' to={`/item/${item._id}`}>   {item.itemName} </Link> 
                  <p className='card-text'> Item Size: {item.itemSize} </p>
               </div>
               </div>
               </div> 
            ))
         }
      </div>
      </div>
      
   );
}

export default DisplayItems;




