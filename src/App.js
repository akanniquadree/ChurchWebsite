import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EventList from './Component/EventsList/EventList';
import Home from './Pages/Home/Home';
import SingleEvent from './Pages/SingleEvent/SingleEvent';
import Staff from './Pages/Staff/Staff';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/events" exact element={<EventList/>}/>
            <Route path="/event/:id" exact element={<SingleEvent/>}/>
            <Route path="/staff" exact element={<Staff/>}/>
          </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;
