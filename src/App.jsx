import React from 'react';
import Index from './Pages/Index';
import { Routes, Route } from "react-router-dom";
import Crew from './Pages/Crew';



const App = () => {
  return (
    <Routes>
      <Route path='/' index element={<Index />} ></Route>
      <Route path='/crew'  element={<Crew />} ></Route>
    </Routes>
  );
};

export default App;
