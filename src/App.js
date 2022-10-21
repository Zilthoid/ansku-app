import React from 'react'
import { PHOTO1, PHOTO2, PHOTO3, PHOTO4, PHOTO5, PHOTO6 } from "./assets/photobundle";
import { Footer, WhatAnsku, Header, ImageSlider, } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="gradient__bg">
    <div className="App">
      <div>
        <Navbar />
      </div>
      <Header />
      <WhatAnsku />
      <ImageSlider slides={[ PHOTO1, PHOTO2, PHOTO3, PHOTO4, PHOTO5, PHOTO6 ]} />;
      <Footer />
    </div>
    </div>
  )
}

export default App