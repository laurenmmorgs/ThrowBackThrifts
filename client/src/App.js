// import AllUsers from './components/UserComp/AllUsers';
// import Login from './components/Login'
// import Register from './components/Register'

import ItemDetails from './components/ItemDetails';
import CreateItem from './components/CreateItem';
import UpdateItem from './components/UpdateItem';
import Main from './views/Main';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

function App() {
  // user stuff
  // const [token, setToken] = useState();
  // const [userDetails, setUserDetails] = useState([])
  
  //* Item states 

  const [itemDetails, setItemDetails] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main /> } path="/" default   />
          <Route path='/addItem' element={ <CreateItem itemDetails = { itemDetails } setItemDetails={ setItemDetails } /> } /> 
          <Route path='/item/:id/edit' element={ <UpdateItem  /> } /> 
          <Route path='/item/:id' element={ <ItemDetails itemDetails = { itemDetails } setItemDetails={ setItemDetails }/> } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
