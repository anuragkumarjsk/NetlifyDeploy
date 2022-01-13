import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Business from './Components/Business/Business';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">

      <Router>
      <Navbar/>
        <Routes>
            <Route exact path="/home" element ={<Home/>}/>
            <Route path="/business" element ={<Business/>}/>
            <Route path="/about" element ={<About/>}/>
            <Route path="/contact" element ={<Contact/>}/>
       </Routes>
      </Router>
    </div>
  );
}

export default App;
