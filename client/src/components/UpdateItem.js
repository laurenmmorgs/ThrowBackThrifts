import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";

function UpdateItem(props) {
   
   const { id } = useParams();

   const {itemDetails, setItemDetails } = props;

   const [ item, setItem ] = useState({
      itemName : '',
      itemSize : '',
      price: 0,
      category: '',
      description: ''
   })
   

   const navigate = useNavigate();
  //errors
   const [errors, setErrors] = useState({});

   const changeHandler = (e) => {
         setItem({...item, [e.target.name]:e.target.value});
      }
  
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/" + id)
        .then((res) => {
         setItem(res.data.item);
        })
        .catch((err) => console.log(err));
    }, [id]);

    const updatedSubmitHandler = (e) => {
      e.preventDefault();
      axios
        .put("http://localhost:8000/api/edit/" + id, item)
        .then((res) => {
          console.log(res);
          navigate("/"); //takes us to the main page
        })
        .catch((err) => {
          console.log(err);
          setErrors(err.response.data.errors);
        });
    };


   return (
      <div className="mx-auto col-10 col-md-8 col-lg-6">
         <h1> Edit {item.itemName} </h1>
         <Link to="/"  style={{ position: "absolute", right: 0 }}> back to home </Link>
         <form  onSubmit={updatedSubmitHandler}>  

            <div  className="form-group" >
               <label className="form-label"> Item name: </label>
               <input className="form-control" type = "text" name="itemName" defaultValue ={item.itemName} onChange = { changeHandler } /> 
               {
                  errors.itemName ? (
                     <p> {errors.itemName.message} </p>
                  ):
                  null
               }
            </div>

            <div className="form-group">
               <label className="form-label"> Size: </label>
               <input className="form-control" type = "text" name="itemSize" value ={item.itemSize} onChange = { changeHandler }/> 
               {
                  errors.itemSize ? (
                     <p> {errors.itemSize.message} </p>
                  ):
                  null
               }
            </div>

            <div className="form-group"  >
               <label className="form-label" > Category </label>
               <input className="form-control" type = "text" name="category" defaultValue ={item.category} onChange = { changeHandler }/> 
               {
                  errors.category ? (
                     <p> {errors.category.message} </p>
                  ):
                  null
               }
            </div>
            <div className="form-group"  >
               <label className="form-label"> Price:  </label>
               <input className="form-control"type="number" name = "price" defaultValue={item.price} onChange = { changeHandler }/> 
               {
                  errors.price ? (
                     <p> {errors.price.message} </p>
                  ):
                  null
               }
            </div>

            <div className="form-group" >
               <label className="form-label"> Description </label>
               <input className="form-control" type= "text" name ="description" defaultValue ={item.description} onChange = { changeHandler  } />
               {
                  errors.description ? (
                     <p> {errors.description.message} </p>
                  ):
                  null
               }
            </div>
            <input className="btn btn-primary" type="submit"/>
         </form>
      </div>
   )
}

export default UpdateItem
