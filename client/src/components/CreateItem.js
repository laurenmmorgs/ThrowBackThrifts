import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate,useParams } from "react-router-dom";
import { set } from "mongoose";


const CreateItem = (props) => {

   const {itemDetails, setItemDetails } = props;

   const[image, setImage ] = useState([])
   const [ item, setItem ] = useState({
      itemName : '',
      itemSize : '',
      price: 0,
      category: '',
      description: '',
      image: ''
   })
   
   // const [image,setImage] = useState([]);

   const navigate = useNavigate();
  //errors
   const [errors, setErrors] = useState({});

   const onSubmitHandler = (e) => {
      // console.log(e)

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
          navigate("/");
        })
        .catch((err) => {
         //  console.log(err);
          setErrors(err.response.data.errors);
        });
    };

    const changeHandler = (e) => {
         if(e.target.name === 'image '){
            var reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
               console.log(reader.result)
               // setImage(reader.result);
               setItem(reader.result);
      }
            
      }
         setItem({...item, [e.target.name]:e.target.value});
      }
   
   function convertToBase64 (e) {
      console.log(e)
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
         console.log(reader.result)
         setImage(reader.result);
      }
      reader.onerror = error => {
         console.log("error", error)
      }
   }

   return (
      
      <div className="row">
         <div className="mx-auto col-10 col-md-8 col-lg-6"> 
         <Link to="/"  style={{ position: "absolute", right: 0 }}> back to home </Link>

         <h1 className="text-center"> Post a new item: </h1>

         <form  onSubmit={onSubmitHandler} >  
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
            <div  className="form-group"> 

                  <input 
                  accepts="image/"
                  type="file"
                  onChange={convertToBase64}
                  name=""
                  defaultValue={item.image}
                  />
                  {
                     item.image=="" || item.image ==null ? "" : <img width={100} height={100} src={item.image} /> 
                  }
                  

            </div>
         </div>
            <input className="btn btn-primary" type="submit"/>
         </form>
      </div>
      </div>
   );
}


export default CreateItem;
