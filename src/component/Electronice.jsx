import React from "react";
import blog from "../Assest/image/blog.jpg";
import blog1 from "../Assest/image/news.jpg";
import blog2 from "../Assest/image/news1.jpg";
import watchimg from "../Assest/image/watchimage.jpg";
import footer from "../Assest/image/footerlogo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
const Electronic = () => {
  return (
    <>
      <div className="container-fluid d-flex contactimage justify-content-center align-items-center">
        <div className="contactheading text-center ">
          <h3>BLOG</h3>
          <h6>Home / Blog</h6>
        </div>
      </div>

      <div className="container mt-5   ">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6" >
            <div >
              <h3  >RECENT ARTICLES</h3>
            </div>
            <div className=" ">
              <div className="d-flex mt-4">
                <div>
                  <img src={blog1} className="blogimag1" alt=" no image" />
                </div>
                <div className="ml-4 mt-3">
                  <h5>REVEAL THE WOMAN WITHIN</h5>
                  <p>Ruis curabitur ligula sapien, tincidunt non,...</p>
                </div>
              </div>
              <div className="d-flex mt-4">
                <div>
                  <img src={blog2} className="blogimag1" alt=" no image" />
                </div>
                <div className="ml-4 mt-3">
                  <h5>SECRET FRAGRANCES FOR WOMEN</h5>
                  <p>Cames cum sociis natoque penatibus...</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 " >
          <img className="blogimag3" src={blog1} alt=" no image" />
          <h5>By Ramamoorthi M</h5>
          <p>Agust 22, 2022</p>
        </div>
        </div>
         </div>

          <div className="container mt-4">
            <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="ml-5"><h3>BEST PRODUCTS</h3></div>
              <div >
                <img className="bestimage" src={watchimg} />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ">
             <div >
              <h4>REVEAL THE WOMAN WITHIN</h4>
              <p>Ruis curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed cursus t...</p>
             <img className="blogimag3 " src={blog2} alt=" no image" />
             <h5>By Ramamoorthi M</h5>
             <p>Agust 22, 2022</p>
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
export default Electronic;