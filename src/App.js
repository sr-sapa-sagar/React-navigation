import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, Form } from 'react-router-dom';
import { Link } from 'react-router-dom';

import About from './Pages/About';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import NotFound from './Pages/NotFound';
import Page from './Pages/Page';
import User from './Pages/User';
import Userx from './Pages/Userx';


function App() {
  return (
    <div className="App">
      <Router>
      <header>
        <div className='container'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className='nav-link'>About Us</Link>
        </li>
        <li className="nav-item">
        <Link to="/services" className='nav-link'>services</Link>
        </li>
        <li className="nav-item">
        <Link to="/contact" className='nav-link'>Contact </Link>
        </li>
        <li className='nav-item'>
            <div className='dropdown-x'>
             <li> <Link to={"#"} className='nav-link'>Dropdown Menu</Link></li>
              <div className='dropdown-x-menu'>
               <Link to={"/"} className='nav-link'>Home</Link>
                <Link to={"/about"} className='nav-link'>About</Link>
                <Link to={"/cntact"} className='nav-link'>Contact</Link>
                <Link to={"/services"} className='nav-link'>Services</Link>
               </div>           
              </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/contact/:page' element={<Page/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/users/:username' element={<User/>}></Route>
        <Route path='/usersx/:id/:username' element={<Userx/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
