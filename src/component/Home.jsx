import Data from "../component/Model/Data";
import image from "../Assest/image/arun1.jpg.jpg";
import image1 from "../Assest/image/arun2.jpg.jpg";
import image2 from "../Assest/image/arun3.jpg.jpg";
import watch from "../Assest/image/watch.jpg";
import watchimg from "../Assest/image/watchimage.jpg";
import footer from "../Assest/image/footerlogo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { increment } from "./services/Slices/AddCartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

import { useEffect, useState } from "react";
import img1 from "../Assest/image/img1.jpg";
const Home = () => {

  const dispatch = useDispatch();

  function add(v) {
    // console.log(v)
    dispatch(increment(v))
  }

  let [APIData, setAPIData] = useState([]);
  // console.log("api",APIData)

  // console.log(APIData,"api data")

  // useEffect(() => {

  //   fetch(`http://restp.herokuapp.com/language/`)
  //     .then((response) => {return response.json()})
  //     .then((actualData) =>  {
  //        console.log(actualData)
  //       setAPIData(actualData)
  //      });
      
  // }, []);

  useEffect(()=>{
    var data=axios.get('http://restp.herokuapp.com/language/')
      .then ((response)=>{console.log(response.data)})
    //  .then((res)=>{setAPIData(res.data)});
  })
 

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 " src={image2} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image1} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h3 className="tagheading mt-5">OUR PRODUCTS</h3>
        </div>
      </div>

      <div className="container-fluid  mb-5">
        <div className="row">
      {Data.map((data,i) => {
                return (
      
          <div className="card col-lg-3 col-md-4 col-sm-6 mt-5 " key={i} style={{ border: "none" }}>
            <div className="product text-center " >
              <img src={img1} className="product1" alt="no image" />
                  <div className="card-body">
                  <h4 className="card-title" >{data.name}</h4>
                  <p className="card-text">Rs.{data.price}</p>
                  <p className="card-text"> Quantity:{data.Quantity}</p>
                   <button className=" mt-3 btn btn-danger addcart" onClick={() => { add(data) }}>ADD CART</button> 
                </div>
            </div>
          </div>
        
       )})} 
     </div>
      </div>
      {/* http://localhost:9000/api/getAll */}

      <div className="container-fluid mt-5 ">
        <div className="container">
          <div className="row">
            <h3 className="tagheading ">OUR CILENT</h3>
          </div>
          <div className="row mb-5 mt-3 text-center container ">
            <div className="col-lg-3 col-md-6 col-sm-3  mb-3"><h2 >umbrella</h2> Digital group</div>
            <div className="col-lg-3 col-md-6 col-sm-3 mb-3 "> <h2 >East LOOK</h2> USA JEANS STORE</div>
            <div className="col-lg-3 col-md-6 col-sm-3  mb-3"> <h2 >redBox</h2>Digital group</div>
            <div className="col-lg-3 col-md-6 col-sm-3  mb-3"> <h2 >Miammi Cafe</h2> Digital group</div>
          </div>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-center flex-column align-item-center ">
        <div className="row">
          <h3 className="  tagheading">WATCH &amp; SHOP</h3>
        </div>
        <div className="row text-center d-flex ">
          <div className="col-lg-8 col-sm-12 ml-1 "><img className="watch-image1" src={watch} /></div>
          <div className="col-lg-3 col-sm-12 mt-2">   <img className="watch-image2" src={watchimg} />
            <div className="watch-contain">
              <h4 className="heading" >EVE`S EVENCES</h4>
              <span className="contain">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores harum minima voluptas,
                repudiandae sapiente, nihil optio officia quas alias temporibus nostrum tempore numquam?</span>
              <button className="button-shop  ml-auto mr-auto" >SHOP NOW</button>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid ">
        <div className="container">

          <p className="new" >NEWS</p>

          <div className="row">
            <div className="col-lg-5 col-sm-12 news1 mx-auto  my-2">
              <h4 className="newhead1">REVEAL THE WOMEN WITHIN</h4>
              <h6 className="newhead2">BY Rammoorthi M     |  On December 4,2022   |  1 Comment</h6>
              <p className="newhead3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolore dolorum dignissimos hic laboriosam, obcaecati, provident.</p>
            </div>
            <div className="  col-lg-5 col-sm-12 news2 mx-auto my-2">
              <h4 className="newhead1">SECREATE FREGANCES FOR WOMEN</h4>
              <h6 className="newhead2">BY Rammoorthim     |  On October 7,2020   |  2 Comment</h6>
              <p className="newhead3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolore dolorum dignissimos hic laboriosam, obcaecati, provident.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 text-center ">
              <button className="readbutton ">READ MORE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-sm-6 security">
            <h5 className="security1"> HIGHEST CONCENTRATION OF FRAGANCES</h5>
            <h1 className="security2">THE SCENTURY</h1>
            <p className="security3">Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ratione dolore dolorum dignissimos hic laboriosam,</p>
            <button className="showbutton">SHOW NOW</button>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-11 ml-lg-4 col-sm-12 tag">
            <h5 className="inuptxt">JOINING OUR MAILING LIST FOR LATEST NEWS & OFFERS</h5>
            <input type="text" name="name" placeholder="your email address" className="inputtext" />
            <button className="submitbutton">SUBMIT</button>
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
export default Home;
