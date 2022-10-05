import React from 'react'


import { Footer, Blog, Social, WhatAnsku, Header, ImageSlider, SliderData } from "./containers";
import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="gradient__bg">
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
      <WhatAnsku />
      <Social />
      <ImageSlider slides={SliderData} />;
      <Blog />
      <Footer />
    </div>
    </div>
  )
}

export default App