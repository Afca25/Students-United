import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"

//Styles
import './App.scss'

//Components
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import TopCourses from './Components/TopCourses';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/top-courses" element={<TopCourses />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
