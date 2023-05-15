import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import styles from './MyStuff.module.css';


const ItemDetails = () => {
  const { id } = useParams()

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

          //deletes from the database when user buys the item
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        const updatedItem = item.filter((items) => items._id !== id);
        setItem(updatedItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="p-3">
      <div className="d-flex justify-content-evenly">

        <div className="border">

          <img src={`http://localhost:8000/${item.itemImage}`} style={{ width: '500px', height: '350px' }} />
        </div>
        <div >
          <h1> Product: {item.itemName} </h1>
          <h4> Price : ${item.price} </h4>
          <h3> Category: {item.category} </h3>
          <h3> Size: {item.itemSize} </h3>
          <p>  Description : {item.description} </p>
          <Link
                className="btn btn-success btn-sm"
                onClick={(e) => {
                  deleteHandler(item._id);
                }}
                to={"/"}
              >
                Buy {item.itemName}
              </Link>
        </div>
        <div>
        </div>
      </div>
      <br />
      <button className="btn btn-primary" onClick={NavigatePage}  >
        {" "}
        Edit Item  Details{" "}
      </button>
    </div>
  );
}

export default ItemDetails;
