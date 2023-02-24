import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
 import Login from "../Login";
import Home from "./Home";
import Services from "./Services";
import PageNot from "./PageNot";
import Mobile from "./Mobile";
import Electronic from "./Electronice";
import MailIcon from '@mui/icons-material/Mail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import logo1 from "../Assest/image/logo1.jpg";

// import './App.css';
const Header=()=>{
    return(
        <div>
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/"> <img src={logo1} alt="" className='logoimage' /> </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><Link to="Home" className='li active'> HOME  </Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="About" className='li' >ABOUT</Link></a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Services" className='li' >SERVICES </Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Electronic" className='li' >BLOG</Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Mobile" className='li' >SHOP </Link></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><Link to="Contact" className='li' >CONTACT </Link></a>
      </li>
      </ul><ul className='navbar-nav'>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className='navIcon1'><Login /> </span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className='navIcon2'> <LocalMallIcon /> </span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#"><span className='navIcon3'><MailIcon /></span></a>
      </li>
      
    </ul>
   
  </div>
</nav>
</div> 




       <Routes >
        <Route path='Home' element={<Home />} ></Route>
        <Route path='About' element={<About></About>}></Route>
        <Route path='About/:useparam' element={<About />}></Route>
        <Route path='Contact' element={<Contact />} ></Route>
        <Route path='Services' element={<Services />} ></Route>
        <Route path='Login' element={<Login />} ></Route>
        <Route path='Mobile' element={<Mobile />} ></Route>
        <Route path='Electronic' element={<Electronic />} ></Route>
        <Route path='*' element={<PageNot />} ></Route>
      </Routes> 

    </div>
    );
}
export default Header;