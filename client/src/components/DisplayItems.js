import {React ,useState, useEffect} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";



const DisplayItems = () => {
   
   const [items, setItems] = useState([]);
   
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
      <div>
         {
            items.map((item) =>
            (
               <div key={item._id}> 
               <Link to={`/editItem/${item._id}`}>   {item.itemName} </Link> 
                  <p> Item Size: {item.itemSize} </p>
               </div>
            ))
         }
      </div>
   );
}

export default DisplayItems;




