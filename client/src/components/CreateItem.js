import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";
import { set } from "mongoose";


const CreateItem = (props) => {
   const { itemDetails, setItemDetails } = props;

   const [image, setImage] = useState("");
   const [item, setItem] = useState({
     itemName: "",
     itemSize: "",
     price: 0,
     category: "",
     description: ""
   });
 
   const navigate = useNavigate();
 
   const [errors, setErrors] = useState({});
 
   const onSubmitHandler = (e) => {
     e.preventDefault();
 
     // set the image property of the item object to the value of the image state
   //   const formData = new FormData();  
   //   formData.append('image', item.image);
   //   formData.append('itemName', item.itemName);
   //   formData.append('price', item.price);
   //   formData.append('category', item.category);
   //   formData.append('description', item.description);

   //   console.log(item.image)
 
     axios
       .post("http://localhost:8000/api/newItem", item)
       .then((res) => {
         console.log("post data", res);
         console.log(res.data);
         setItemDetails([...itemDetails, res.data]);
         const id = res.data._id;
         console.log(id);
         navigate("/");
       })
       .catch((err) => {
         setErrors(err);
       });
   };
 
   const changeHandler = (e) => {
       setItem({ ...item, [e.target.name]: e.target.value });
     }

   const handleImage = (e) => {
      setItem({...item, image: e.target.files[0]})
      console.log(item.image)
   }


   return (
      
      <div className="row">
         <div className="mx-auto col-10 col-md-8 col-lg-6"> 
         <Link to="/"  style={{ position: "absolute", right: 0 }}> back to home </Link>

         <h1 className="text-center"> Post a new item: </h1>

         <form  onSubmit={onSubmitHandler} encType='multipart/form-data'>  
         <div> 

            <div className="form-group" >
               <label className="form-label"> Item name: </label>
               <input className="form-control" type = "text" name="itemName" defaultValue ={item.itemName} onChange = { changeHandler } /> 
               {
                  errors.itemName ? (
                     <p className="text-danger"> {errors.itemName.message} </p>
                     ):
                     null
                  }
            </div>

            <div className="form-group" >
               <label className="form-label"> Size: </label>
               <input className="form-control" type = "text" name="itemSize" value ={item.itemSize} onChange = { changeHandler }/> 
               {
                  errors.itemSize ? (
                     <p className="text-danger" > {errors.itemSize.message} </p>
                     ):
                     null
                  }
            </div>

            <div className="form-group">
               <label className="form-label"> Category </label>
               <input className="form-control" type = "text" name="category" defaultValue ={item.category} onChange = { changeHandler }/> 
               {
                  errors.category ? (
                     <p className="text-danger"> {errors.category.message} </p>
                     ):
                     null
                  }
            </div>
            <div className="form-group">
               <label className="form-label"> Price:  </label>
               <input className="form-control" type="number" name = "price" defaultValue={item.price} onChange = { changeHandler }/> 
               {
                  errors.price ? (
                     <p className="text-danger"> {errors.price.message} </p>
                     ):
                     null
                  }
            </div>

            <div className="form-group" >
               <label className="form-label"> Description </label>
               <input className="form-control"type= "text" name ="description" defaultValue ={item.description} onChange = { changeHandler  } />
               {
                  errors.description ? (
                     <p className="text-danger"> {errors.description.message} </p>
                     ):
                     null
                  }
            </div>
            {/* <div  className="form-group"> 

                  <input 
                  accepts=".png, .jpg, .jpeg"
                  type="file"
                  onChange={handleImage}
                  name="image"
                  defaultValue={item.image}
                  />
                  {errors.itemName ? (
                <p className="text-danger"> {errors.itemName.message} </p>
               ) : null}
                  

            </div> */}
         </div>
            <input className="btn btn-primary" type="submit"/>
         </form>
      </div>
      </div>
   );
}


export default CreateItem;
