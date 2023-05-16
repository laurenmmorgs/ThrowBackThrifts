// import AllUsers from './components/UserComp/AllUsers';
// import Login from './components/Login'
// import Register from './components/Register'
import UpdateItem from './components/ItemComp/UpdateItem';
import MainPage from './views/MainPage';
import CreatePage from './views/CreatePage'
import DetailsPage from './views/DetailsPage'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

function App() {
  // user stuff
  // const [token, setToken] = useState();
  // const [userDetails, setUserDetails] = useState([])
  
  //* Item states 

  const [itemDetails, setItemDetails] = useState([])
  const [imageDetails, setImageDetails] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage /> } path="/" default   />
          <Route path='/addItem' element={ <CreatePage /> } /> 
          <Route path='/item/:id/edit' element={ <UpdateItem  /> } /> 
          <Route path='/item/:id' element={ <DetailsPage />  } /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
