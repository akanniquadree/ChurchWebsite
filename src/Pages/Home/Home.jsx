import React from 'react'
import Footer from '../../Component/Footer/Footer'
import HomeEvent from '../../Component/HomeEvent/HomeEvent'
import HomeGallery from '../../Component/HomeEvent/HomeGallery'
import HomeTeam from '../../Component/HomeEvent/HomeTeam'
import Quote from '../../Component/Quotes/Quote'
import Slider from '../../Component/Slider/Slider'
import Topbar from '../../Component/Topbar/Topbar'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import HomeInspiration from '../../Component/HomeEvent/HomeInspiration'

export default function Home() {
  return (
    <>
        <Topbar/>
        <Slider/>
        <Quote/>
       
        <HomeEvent/>
        
        <HomeTeam/>
        <HomeGallery/>
        <HomeInspiration/>
        <Footer/>
    </>
  )
}
