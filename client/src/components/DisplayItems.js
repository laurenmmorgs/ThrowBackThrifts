import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DisplayItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/allItems")
      .then((res) => {
            setItems(res.data.items)
      })
      .catch((err) => {
        console.log(err);
      });
  },[]); 

  //deletes from the database when user buys the item
  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then((res) => {
        console.log(res);
        const updatedItem = items.filter((items) => items._id !== id);
        setItems(updatedItem);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  
  return (
    <div className="wrapper">
      <div className="row d-flex justify-content-center mt-auto20">
      {items.map((item) => (
          <div
            key={item._id}
            className="card border border-primary p-2 mx-2 mb-4 w-25"
            >
            <img src={`http://localhost:8000/${item.itemImage}`}   className="card-img-top" /> 
            <div className="text-center">
              <div className="card-body">
                <Link className="card-title" to={`/item/${item._id}`}>
                  {item.itemName}
                </Link>
                <p className="card-text">Item Size: {item.itemSize}</p>
              </div>
              <Link
                      className="btn btn-danger btn-sm"
                      onClick={(e) => {
                        deleteHandler(item._id);
                      }}
                      to={"/"}
                    >
                      Delete {item.itemName}
                    </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayItems;
