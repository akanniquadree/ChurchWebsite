import { ArrowForwardIos, ArrowBackIos} from '@material-ui/icons'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Slide } from './Slide'

import "./slider.css"

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)
    const timeout = useRef(null)
    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
          }
        if(slideIndex !== Slide.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === Slide.length){
            setSlideIndex(1)
        }
    }
    
    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
          }
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(Slide.length)
        }
    }
    const moveDot = (index) =>{
        if(timeout.current){
          clearTimeout(timeout.current)
        }
    }
    useEffect(()=>{
        const nextSlide = () =>{
          if(slideIndex !== Slide.length){
            setSlideIndex(slideIndex + 1)
          }else if(slideIndex === Slide.length){
            setSlideIndex(1)
          }
        }
        timeout.current = setTimeout(nextSlide, 3000)
        return function (){
          if(timeout.current){
            clearTimeout(timeout.current)
          }
        }
        
      },[slideIndex])
        

  return (
        <div className="sliderContainer">
            {
                Slide.map((item, indx)=>(
                    <div className={`${slideIndex === indx + 1 ? "slide active-anim" : "slide"}`} key={indx}>
                        <img src={item.image} alt=""  />
                    </div> 
                ))
            }
            <ArrowForwardIos className="back next" onClick={nextSlide} htmlColor="white"/>
            <ArrowBackIos className="back " onClick={prevSlide} htmlColor="white"/>  
            <div className="contDot">
              {Array.from({length:Slide.length}).map((item, index)=>(
                <div className={ slideIndex === index +1 ? "dots sliactive": "dots"} onClick={()=>{moveDot(index + 1)}}></div>
              ))}
            </div>
        </div>
  )
}
