import React from 'react'
import Photo1 from "./assets/photo1.jpg"
import Photo2 from "./assets/photo2.jpg"
import Photo3 from "./assets/photo3.jpg"

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
      <ImageSlider slides={[Photo1, Photo2, Photo3]} />;
      <Footer />
    </div>
    </div>
  )
}

export default App