import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";


const CreateItem = (props) => {

   const {itemDetails, setItemDetails } = props;

   const [ item, setItem ] = useState({
      itemName : '',
      itemSize : '',
      price: 0,
      category: '',
      description: '',
      vintage: false,
   })
   

   const navigate = useNavigate();
  //errors
   const [errors, setErrors] = useState({});

   const onSubmitHandler = (e) => {
      console.log(e)

      //prevent default behavior of the submit
      e.preventDefault();
      //make a post request to create a new item
      axios
        .post("http://localhost:8000/api/newItem", item)
        .then((res) => {
          console.log("post data", res); // always console log to get used to tracking your data!
          console.log(res.data);
          setItemDetails([...itemDetails, res.data]);
          const id = res.data._id
          console.log(id);
          navigate("/display");
        })
        .catch((err) => {
          console.log(err);
          setErrors(err.response.data.errors);
        });
    };

    const changeHandler = (e) => {
      if (e.target.name === "vintage") {
         setItem({ ...item, vintage: !item.vintage });
         // creates an object item, and sets the item name to its correct value
         //! Make sure for inputs you put the correct name 
      }
      else {
         setItem({...item, [e.target.name]:e.target.value});
      }
   }


   return (
      <div>
         <h1> Post a new item: </h1>
         <form  onSubmit={onSubmitHandler}>  

            <div >
               <label> Item name: </label>
               <input type = "text" name="itemName" defaultValue ={item.itemName} onChange = { changeHandler } /> 
               {
                  errors.itemName ? (
                     <p> {errors.itemName.message} </p>
                  ):
                  null
               }
            </div>

            <div >
               <label> Size: </label>
               <input type = "text" name="itemSize" value ={item.itemSize} onChange = { changeHandler }/> 
               {
                  errors.itemSize ? (
                     <p> {errors.itemSize.message} </p>
                  ):
                  null
               }
            </div>

            <div >
               <label> Category </label>
               <input type = "text" name="category" defaultValue ={item.category} onChange = { changeHandler }/> 
               {
                  errors.category ? (
                     <p> {errors.category.message} </p>
                  ):
                  null
               }
            </div>

            <div >
               <label> Vintage ? </label>
               <input type = "checkbox" name="vintage" defaultValue ={item.vintage === true } onChange = { changeHandler }/> 
              
            </div>

            <div >
               <label> Price:  </label>
               <input type="number" name = "price" defaultValue={item.price} onChange = { changeHandler }/> 
               {
                  errors.price ? (
                     <p> {errors.price.message} </p>
                  ):
                  null
               }
            </div>

            <div >
               <label> Description </label>
               <input type= "text" name ="description" defaultValue ={item.description} onChange = { changeHandler  } />
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
   );
}


export default CreateItem;
