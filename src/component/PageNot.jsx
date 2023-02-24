import { Routes, Route, Link, Navigate } from 'react-router-dom';
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./Login";
import Home from "./component/Home";
import Services from "./component/Services";
import PageNot from "./component/PageNot";
import Blog from "./component/Blog";
import MailIcon from '@mui/icons-material/Mail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/Assest/image/logo1.jpg";
import './App.css';
import Protected from './component/Protected';
function App(props) {


  const admin = "admin";
  let login = JSON.parse(localStorage.getItem('userinfo'));
  console.log(login);
  return (
    <div>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"> <img src={logo} alt="" className='logoimage' /> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {(login.role==admin)?<>
              <ul className="navbar-nav mr-auto ml-auto ">
                  <li className="nav-item active">
                    <a className="nav-link" href="#"><Link to="/" className='li active'> HOME  </Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="About" className='li' >ABOUT</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Services" className='li' >SERVICES </Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Blog" className='li' >BLOG</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Contact" className='li' >CONTACT </Link></a>
                  </li>
                </ul>
                <ul className='navbar-nav ml-3 '>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Login"><span className='login'>< PersonAddIcon className='navIcon1' /></span> </Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><span className='navIcon2'> <LocalMallIcon /> </span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><span className='navIcon3'><MailIcon /></span></a>
                  </li>
                </ul>
            </>:
            <>
            <ul className="navbar-nav mr-auto ml-auto ">
                  <li className="nav-item active">
                    <a className="nav-link" href="#"><Link to="/" className='li active'> HOME  </Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="About" className='li' >ABOUT</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Services" className='li' >SERVICES </Link></a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Blog" className='li' >BLOG</Link></a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Contact" className='li' >CONTACT </Link></a>
                  </li>
                </ul>
                <ul className='navbar-nav ml-3 '>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><Link to="Login"><span className='login'>< PersonAddIcon className='navIcon1' /></span> </Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><span className='navIcon2'> <LocalMallIcon /> </span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><span className='navIcon3'><MailIcon /></span></a>
                  </li>
                </ul>
            </>}
                
              
              

          </div>
        </nav>
      </div>


      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='About' element={<Protected Component={About} />}></Route>
        <Route path='Contact' element={<Contact />} ></Route>
        <Route path='Services' element={<Protected Component={Services} />} ></Route>
        <Route path='Login' element={<Login />} ></Route>
        <Route path='Blog' element={<Protected Component={Blog} />} ></Route>

      </Routes>

    </div>
  );



}

export default App;

