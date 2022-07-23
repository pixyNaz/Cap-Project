import React from "react";
import './App.css';
import DetailsCap from "./Pages/details_cap/Details_cap";
import Header from "./Componens/Header/Header";
import Catalog from "./Pages/Catalog/Catalog";
import Footer from "./Componens/Footer/Footer";

function App() {
  return (
    <div>
        <Header/>
        <Footer/>
        <Catalog/>
      <DetailsCap/>
    </div>
  );
}

export default App;
