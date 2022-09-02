import { KeyboardArrowUp } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EventList from './Component/EventsList/EventList';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import SingleEvent from './Pages/SingleEvent/SingleEvent';
import Staff from './Pages/Staff/Staff';

function App() {
  const [scrollBtn, setScrollBtn] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

const handleScroll = (e) =>{
    if(window.scrollY > 100){
        setScrollBtn(true)
    }else if (window.scrollY < 0) {
        setScrollBtn(false)
    }
  };
 const scrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/events" exact element={<EventList/>}/>
            <Route path="/event/:id" exact element={<SingleEvent/>}/>
            <Route path="/staff" exact element={<Staff/>}/>
            <Route path="/about" exact element={<About/>}/>
            <Route path="/contact" exact element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
      <div role="button" onKeyUp={scrollTop} tabIndex="0" onClick={scrollTop} id="back-to-top" className={scrollBtn ? "back-btn-shown" : ""} >
          <KeyboardArrowUp title="Go top" fontSize="large" />
        </div>
    </div>
  )
}

export default App;
