import React from 'react'


import { Footer, WhatAnsku, Header, ImageSlider, SliderData } from "./containers";
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
      <ImageSlider slides={SliderData} />;
      <Footer />
    </div>
    </div>
  )
}

export default App