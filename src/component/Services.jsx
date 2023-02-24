import React from "react";
import services from "../Assest/image/services.jpg";
import service1 from "../Assest/image/service1.jpg";
import service2 from "../Assest/image/service2.jpg";
import card1 from "../Assest/image/aboutcard1.jpg";
import card2 from "../Assest/image/aboutcard2.jpg";
import card3 from "../Assest/image/aboutcard3.jpg";
import card4 from "../Assest/image/aboutcard4.jpg";
import footer from "../Assest/image/footerlogo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Service = () => {
  return (
    <>

      <div className="container-fluid d-flex contactimage justify-content-center align-items-center">
        <div className="contactheading text-center ">
          <h3>SERVICES</h3>
          <h6>Home / Service</h6>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <h3 className="  tagheading1">HIGHER FREGRANCE</h3>
        </div>
      </div>


      <div className="container mt-3">
        <div className="card-deck ">
          <div className="card servicecard " >
            <img className="card-img-top" src={service1} alt=""  />
          </div>
          <div className="card servicecard " >
            <img className="card-img-top" src={service2} alt=""  />
          </div>
        </div>
      </div>
  
      
        <div className="container mt-5">
        <div className="row">
          <h3 className="  tagheading1">OUR CILENT WORDS</h3>
        </div>
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <div className="col-sm-12 servicecard1 my-3 p-4"><div><p className="text-light ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolore dolorum dignissimos hic laboriosam, obcaecati, provident.</p>
              </div>
              <div className="d-flex"><img className="card-img mt-3" src={card1} alt="" style={{width:"100px"}} />
              <h4 className="newhead5">Hannah Stocking</h4>
              </div></div>
            </div>
            <div className="  col-md-6 col-sm-12 ">
              <div className="col-sm-12 servicecard2 my-3 p-4">
              <div>
              <p className="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolore dolorum dignissimos hic laboriosam, obcaecati, provident.</p>
              </div>
              <div className="d-flex">
              <img className="card-img mt-3" src={card4} alt="" style={{width:"100px"}} />
              <h4 className="newhead5">Freda Casey</h4>
              </div>
              </div>
             
            </div>
          </div>
        </div>
      


      <div className="container-fluid footer">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12  col-md-3 ">
            <div className="footercontain">
              <img src={footer} />
              <div className="footer-icon">
                <span className="icon"><FacebookIcon /></span>
                <span className="icon"><TwitterIcon /></span>
                <span className="icon"><PinterestIcon /></span>
                <span className="icon"><InstagramIcon /></span>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-3 ">
            <div className="footercontain">
              <h5 >CONTACT US</h5>
              <div>
                <p> <span className="icon"><HomeIcon /></span>09,Vijay Nagar</p>
                <p>  <span className="icon"> <LocalPhoneIcon /></span> 07072112233</p>
                <p><span className="icon"><EmailIcon /></span> Infoexample.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-2 ">
            <div className="footercontain">
              <h5 >QUICK LINKS</h5>
              <div>
                <p>Search</p>
                <p>About Us</p>
                <p>Information</p>
                <p>Privacy Policy</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12  col-md-2">
            <div className="footercontain">
              <h5 >INFORMATION</h5>
              <div>
                <p>Term & Condition</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12  col-md-2 ">
            <div className="footercontain">
              <div className="support">
                <h5 >SUPPORT</h5>
                <div>
                  <p>Search Term</p>
                  <p>Advances Search</p>
                  <p>Help & Faq`s</p>
                  <p>Store Location</p>
                  <p>Order & Return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Service;