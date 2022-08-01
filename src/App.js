import React from "react";
import './App.css';
import DetailsCap from "./pages/details_cap/Details_cap";
import Header from "./componens/Header/Header";
import Catalog from "./pages/Catalog/Catalog";
import HomePage from "./pages/home_page/HomePage";
import Footer from "./componens/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/catalog" element={<Catalog />}/>
            <Route path="/details" element={<DetailsCap />}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
