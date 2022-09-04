import { ArrowForwardIos, ArrowBackIos} from '@material-ui/icons'
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Slide } from './Slide'
import {Link} from "react-router-dom"

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
        setSlideIndex(index)
    }
    useEffect(()=>{
        const nextSlide = () =>{
          if(slideIndex !== Slide.length){
            setSlideIndex(slideIndex + 1)
          }else if(slideIndex === Slide.length){
            setSlideIndex(1)
          }
        }
        timeout.current = setTimeout(nextSlide, 30000)
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
                        <div className={`${indx === 0  ? "slideDetails":"hiide"}`}>
                          <h4 className='headOne'>{item.heading}</h4>
                          <p className="paraOne">{item.para}</p>
                          <span className="auth">{item.auth}</span>
                        </div>
                        <div className={`${indx === 1  ? "slideDetailsTwo":"hiide"}`}>
                          <h4 className='headTwo'>{item.heading}</h4>
                          <p className="paraTwo">{item.para}</p>
                        </div>
                        <div className={`${indx === 2 ? "slideDetailsThree":"hiide"}`}>
                          <h4 className='headThree'>{item.heading}</h4>
                          <p className="paraThree">{item.para}</p>
                        </div>
                        <div className={`${indx ===  4 ? "slideDetails":"hiide"}`}>
                          <h4 className='headOne'>{item.heading}</h4>
                          <p className="paraOne">{item.para}</p>
                          <span className="auth">{item.auth}</span>
                        </div>
                        <div className={`${indx ===  3 ? "slideDetailsTwo":"hiide"}`}>
                          <h4 className='headTwo'>{item.heading}</h4>
                          <p className="paraTwo">{item.para}</p>
                        </div>
                        <div style={{left:"550px", border:"1px solid white"}} className={`${indx ===  5 ? "slideDetailsTwo":"hiide"}`}>
                         <Link to="/contact" style={{backgroundColor:"#4b646f"}}><h4  className='headTwo'>{item.heading}</h4></Link>
                        </div>
                        
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
