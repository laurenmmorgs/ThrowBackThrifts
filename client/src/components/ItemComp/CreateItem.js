import React, { useState, useRef } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { set } from "mongoose";


const CreateItem = (props) => {
  

  const { itemDetails, setItemDetails } = props;
  const [item, setItem] = useState({
    itemName: "",
    itemSize: "",
    price: 0,
    category: "",
    description: "",
    itemImage: null
  });
  
  const navigate = useNavigate();
  
  //errors for images and form 
  const [imageError, setImageError] =useState(null)
  const [errors, setErrors] = useState({});
  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    if (item.itemImage === null) {
      setImageError("Please select a photo");

    }

    //form data to grab the image and render the correct info
    const formData = new FormData();
    formData.append("itemName", item.itemName);
    formData.append("itemSize", item.itemSize);
    formData.append("price", item.price);
    formData.append("category", item.category);
    formData.append("description", item.description);
    formData.append("itemImage", item.itemImage); 
  
    axios
      .post("http://localhost:8000/api/newItem", formData)
      .then((res) => {
        
        console.log("post data", res);
        console.log(res.data);
        setItemDetails([...itemDetails, res.data]);
        const id = res.data._id;
        console.log(id);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.response.data.error.errors);
        setErrors(err.response.data.error.errors);
      });
  };

  //change handler for the form inputs except the photo
  const changeHandler = (e) => {
    console.log(e.target.name)
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  
  //handles and sets the error and the images 
  const handleImageUpload = (e) => {
    console.log(e)
    console.log(e.target.files[0])
    setItem({ ...item, itemImage: e.target.files[0] });
    setImageError(null); // reset image error when a photo is selected

  };

  return (
    <div className="row">
      <div className="mx-auto col-10 col-md-8 col-lg-6 border mt-3">

        <h1 className="text-center"> Post a new item: </h1>

        <form onSubmit={onSubmitHandler} encType="multipart/form-data" className="p-2">
          <div>
            <div className="form-group">
              <label className="form-label"> Item name: </label>
              <input
                className="form-control"
                type="text"
                name="itemName"
                defaultValue={item.itemName}
                onChange={changeHandler}
              />
              { errors.itemName ? (
                <p className="text-danger"> {errors.itemName.message} </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label"> Size: </label>
              <input
                className="form-control"
                type="text"
                name="itemSize"
                value={item.itemSize}
                onChange={changeHandler}
              />
              { errors.itemSize ? (
                <p className="text-danger"> {errors.itemSize.message} </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label"> Category </label>
              
              <select className="form-control"
                name="category"
                defaultValue={item.category}
                onChange={changeHandler}> 

              <option> Please select one: </option>
              <option> Jeans </option>
              <option> Sweaters </option>
              <option> Accessories </option>
              <option> Shoes </option>
              <option> Sweatshirts </option>
              <option> T-shirts </option>
              <option> Miscellaneous </option>
              <option> Pants </option>
              <option> Dresses </option>
              <option> Shorts </option>
              </select>
              { errors.category ? (
                <p className="text-danger"> {errors.category.message} </p>
              ) : null}
            </div>
            <div className="form-group">
              <label className="form-label"> Price: </label>
              <input
                className="form-control"
                type="number"
                name="price"
                defaultValue={item.price}
                onChange={changeHandler}
              />
              { errors.price ? (
                <p className="text-danger"> {errors.price.message} </p>
              ) : null}
            </div>

            <div className="form-group">
              <label className="form-label"> Description </label>
              <input
                className="form-control"
                type="text"
                name="description"
                defaultValue={item.description}
                onChange={changeHandler}
              />
              { errors.description ? (
                <p className="text-danger"> {errors.description.message} </p>
              ) : null}
            </div>
            <div className="form-group">
                <label className="form-label">Image:</label>
                <input
                  className="form-control"
                  type="file"
                  name="image"
                  onChange={handleImageUpload}
                />
                {imageError && <p className="text-danger">{imageError}</p>}

              </div>
                <br /> 
            <input className="btn btn-primary" type="submit" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default CreateItem;
