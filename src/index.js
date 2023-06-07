import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoPage from './Components/InfoPage';
import BookingPage from './Components/BookingPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>}/>
  <Route path="/:id" element={<InfoPage/>} />
  <Route path="/booking/:id" element={<BookingPage/>} />

  </Routes>
  
  </BrowserRouter>
    
  </React.StrictMode>
);


