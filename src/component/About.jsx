import React from "react";
import footer from "../Assest/image/footerlogo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import card1 from "../Assest/image/aboutcard1.jpg";
import card2 from "../Assest/image/aboutcard2.jpg";
import card3 from "../Assest/image/aboutcard3.jpg";
import card4 from "../Assest/image/aboutcard4.jpg";
let About = () => {

    
    return (
        <>
            <div className="container-fluid d-flex contactimage justify-content-center align-items-center">
                <div className="contactheading text-center ">
                    <h3>ABOUT</h3>
                    <h6>Home / About</h6>
                </div>
            </div>

            <div className="container mt-3">
                <div className="row">
                    <h3 className="  tagheading1 ">OUR TEAM</h3>
                    <p className="text-center ">Quam adipiscing vitae proin sagittis nisl rhoncus</p>
                </div>
            </div>


            <div className="container mt-3 col-md-12">
                <div className="card-deck">
                    <div className="card " >
                        <img className="card-img-top" src={card1} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Alicia Woods</h4>
                            <p className="card-text">Office Manager</p>
                        </div>
                    </div>
                    <div className="card " >
                        <img className="card-img-top" src={card2} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Alicia Woods</h4>
                            <p className="card-text">Office Manager</p>
                        </div>
                    </div>
                    <div className="card " >
                        <img className="card-img-top" src={card3} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Alicia Woods</h4>
                            <p className="card-text">Office Manager</p>
                        </div>
                    </div>
                    <div className="card " >
                        <img className="card-img-top" src={card4} alt="" />
                        <div className="card-body">
                            <h4 className="card-title">Alicia Woods</h4>
                            <p className="card-text">Office Manager</p>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="container  mt-4">
                <div className="row">
                    <h3 className="  tagheading1">OUR ACHIVMENTS</h3>
                </div>
                <div> <p className="text-center ">Pharetra massa massa ultricies mi quis hendrerit dolor magna eget</p></div>
                <div className=" card-deck  row mt-5">
                    <div className="card col-sm-12 col-lg-6  bg-white p-4">
                        <div className="imgbox  d-flex align-items-center justify-content-center" ><i className="fa-solid fa-plus pfont"></i></div>
                        <div className="card-body mt-2 ">
                            <p className="eightyk"> <span className="tcolor">80</span>K </p>
                            <h3 className="tcolor">Sales</h3>
                            <p className="card-text">Turpis egestas sed</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-lg-6    bg-white p-4">
                        <div className="imgbox d-flex align-items-center justify-content-center" ><i className="fa-solid fa-minus  pfont"></i></div>
                        <div className="card-body mt-2">
                            <p className="eightyk"><span className="tcolor">10</span>K </p>
                            <h3 className="tcolor">Flavors</h3>
                            <p className="card-text">Non enim praesent</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-lg-6   bg-white p-4">
                        <div className="imgbox d-flex align-items-center justify-content-center" ><i className="fa-solid fa-house-chimney pfont"></i>
                        </div>
                        <div className="card-body mt-2 ">
                            <p className="eightyk"><span className="tcolor" >15</span>K </p>
                            <h3 className="tcolor">Branches</h3>
                            <p className="card-text">Libero volutpat sed cras</p>
                        </div>
                    </div>
                    <div className="card col-sm-12 col-lg-6   bg-white p-4">
                        <div className="imgbox d-flex align-items-center justify-content-center" ><i className="fa-solid fa-gears pfont"></i></div>
                        <div className="card-body mt-2 ">
                            <p className="eightyk"><span className="tcolor">50</span>K </p>
                            <h3 className="tcolor">Customer</h3>
                            <p className="card-text ">Libero volutpat sed cras</p>
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
export default About;
