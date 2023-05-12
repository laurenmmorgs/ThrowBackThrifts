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
  }, []);



  return (
    <div className="wrapper ml-20 ">
      <div className="row d-flex justify-content-center mx-auto p-2 grid gap-3" >
        {items.map((item) => (
          <div
            key={item._id}
            className="card rounded p-2" style={{ width: "18rem" }}
          >
            <img src={`http://localhost:8000/${item.itemImage}`} className="card-img-top img-fluid" style={{
              width: "100%",
              height: "15vw",
              objectFit: "cover"}} alt={item.itemName} />
            <div className="text-center">
              <div className="card-body">
                <Link className="card-title" to={`/item/${item._id}`}>
                  {item.itemName}
                </Link>
                <p className="card-text">Item Size: {item.itemSize}</p>
                <Link to={`/item/${item._id}`} className="icon-link icon-link-hover text-secondary"> view item </Link>
              </div>

             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayItems;
