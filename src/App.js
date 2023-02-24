
import Badge from '@mui/material/Badge';
import Table from '@mui/material/Table';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Routes, Route, Link, } from 'react-router-dom';
import About from "./component/About";
import Contact from "./component/Contact";
import Login from "./Login";
import Home from "./component/Home";
import Services from "./component/Services";
import Blog from "./component/Blog";
import MailIcon from '@mui/icons-material/Mail';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "../src/Assest/image/logo1.jpg";
import './App.css';
import { decrement } from "./component/services/Slices/AddCartSlice"
import Protected from './component/Protected';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {

  const admin = "admin";

  let login1 = JSON.parse(localStorage.getItem('userinfo'));
   console.log(login1); 

  const nselector = useSelector((state) => state.counter.value);
  /* console.log(nselector);*/

  const dispatch1 = useDispatch()

  const deleted = (v) => {
    dispatch1(decrement(v))
  }


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>

      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"> <img src={logo} alt="" className='logoimage' /> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {login1 == null ? <>
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
                  <a className="nav-link" href="#">< PersonAddIcon className='navIcon1 s1' data-toggle="modal" data-target="#myModal" /></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Badge badgeContent={nselector.length} onClick={handleClick} color="warning"  >
                      <LocalMallIcon className='navIcon2 s1' />
                    </Badge></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><span className='navIcon3 s1'><MailIcon /></span></a>
                </li>
              </ul>
            </> : <>
              {(login1.role == admin) ? <>

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
                    <a className="nav-link" href="#">< PersonAddIcon className='navIcon1 s1' data-toggle="modal" data-target="#myModal" /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Badge badgeContent={nselector.length} onClick={handleClick} color="warning"  >
                        <LocalMallIcon className='navIcon2 s1' />
                      </Badge></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><span className='navIcon3 s1'><MailIcon /></span></a>
                  </li>
                </ul>
              </> : <>
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
                    <a className="nav-link" href="#"><Link to="Contact" className='li' >CONTACT </Link></a>
                  </li>
                </ul>
                <ul className='navbar-nav ml-3 '>
                  <li className="nav-item">
                    <a className="nav-link" href="#" > < PersonAddIcon className='navIcon1 s1' data-toggle="modal" data-target="#myModal" /> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <Badge badgeContent={nselector.length} onClick={handleClick} color="warning"  >
                        <LocalMallIcon className='navIcon2 s1' />
                      </Badge></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"><MailIcon className='navIcon3 s1' /></a>
                  </li>
                </ul>
              </>}
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

      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >
          {nselector.length ? <>
            <Table>
              <thead>
                <tr>
                  <th className='pl-1'>Images</th>
                  <th className='pl-5'>Name</th>
                  <th className='pl-5'>Prices</th>
                  <th className='pl-5'>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {nselector.map((v,i) => {
                  return (
                    <>

                      <tr key={i} >
                        <td  >
                          <img  src={v.image} className="popimage" />
                        </td>
                        <td className='pl-5'>{v.pname}</td>
                        <td className='pl-5'>Rs.{v.price}</td>
                        <td className='pl-5'>Quantity {v.quantity}</td>
                        <td><i className="fa-sharp fa-solid fa-trash pl-4" style={{ color: "red" }} onClick={() => {deleted(v)}}></i></td>
                      </tr>
                     
                    </>
                  );
                })}
              </tbody>
              
            </Table>
          </> :
            <h5>your cart is Empty</h5>
          }
        </MenuItem>
      </Menu>

    </>
  );

}
export default App;

