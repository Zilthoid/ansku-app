import React, {useState} from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import "./imageSlider.css"

const ImageSlider = ({ slides }) => {

const [current, setCurrent] = useState(0)
const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if(!Array.isArray((slides)) || slides.length <= 0) {
      return null
  }

  return (
    <div className='image__slider-container'>
      <section className='slider' id='work'>
        <FaArrowLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowRight className='right-arrow' onClick={nextSlide} />
        {slides.map((slide, index) => {
            return (

              
              <div className={index === current ? "slide active" : "slide"} key="index">
                {index === current && (
                  <img src={slide} alt="" className='image'/>
                )}
              </div>
              

            )
          })}
      </section>
    </div>
  )
}

export default ImageSlider
