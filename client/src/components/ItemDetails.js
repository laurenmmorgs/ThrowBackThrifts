import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import styles from './MyStuff.module.css';


const ItemDetails = () => {
   const { id  } = useParams()
   
   const navigate = useNavigate();

   const [item, setItem] = useState([]);

   useEffect(() => {
      axios
        .get(`http://localhost:8000/api/${id}`)
        .then((res) => {
          console.log(res.data.item);
          setItem(res.data.item);
        })
        .catch((err) => console.log(err));
    }, []);
  
    const NavigatePage = (e) => {
      navigate(`/item/${id}/edit`);
    };


   return (
      <div>

        <div className="d-flex justify-content-between" >
        <h1> Item Details  </h1>
        <Link to="/"> back to home </Link>
      </div>

      <div className="d-flex justify-content-evenly">  

      <div className="border"> 

        <h1> Image Here </h1>
      </div>
      <div className="text-center" >
        <h4> Product: {item.itemName} </h4>
        <h4> Price : {item.itemPrice} </h4>
        <h3> Category: {item.category} </h3>
        <h3> Size: {item.itemSize} </h3>
        <p>  Description : {item.description} </p>
      </div>
      <div> 
      </div>
      </div>
      <button className="btn btn-primary" onClick={NavigatePage}  >
        {" "}
        Edit Item  Details{" "}
      </button>
      </div>
   );
}

export default ItemDetails;
