
import React from "react";
import footer from "../Assest/image/footerlogo.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PinterestIcon from '@mui/icons-material/Pinterest';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () => {

  const FormValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().required('Email is Required').email('Invalid email'),
    phone: Yup.number().positive().min(11).required("phone No. is required"),
    message:Yup.string().required("must be rquired"),
})

const handleformsubmit = (values) => {
    console.log("form is field sucessfully", values);
    
}

  return (
    <>
      <div className="container-fluid d-flex  contactimage justify-content-center align-items-center">
        <div className="contactheading text-center ">
          <h3>CONTACT</h3>
          <h6>Home / Contact</h6>
        </div>
      </div>

      <div className="container">
        <div className="d-flex flex-wrap justify-content-around m-4">
          <div className="card bg-white m-3   ">
            <div className="card-body d-flex align-items-center  ">
              <div>
              <i className="fa-solid fa-square-phone phoneicon m-5"></i>
              </div>
              <div>
                <h3 className="card-text"> Phone</h3>
                <p className="card-text"><span className="h5">Toll Free:</span> 0123-456-789</p>
                <p className="card-text"><span className="h5">Fax:</span> 0123-456-789</p>
              </div>
            </div>
          </div>
          <div className="card bg-white m-3 ">
            <div className="card-body d-flex align-items-center ">
            <div><i className="fa-solid fa-square-envelope  phoneicon m-5"></i></div>
            <div>
              <h3 className="card-text">Email</h3>
              <p className="card-text">mail@example.com</p>
              <p className="card-text">support@example.com</p>
            </div>
            </div>
          </div>
          <div className="card bg-white m-3 ">
            <div className="card-body d-flex align-items-center ">
            <div><i className="fa-solid fa-location-arrow bg-dark phoneicon1 m-5"></i>
            </div>
            <div>
              <h3 className="card-text">Address</h3>
              <p className="card-text">No.58 A,East Madison Street,</p>
              <p className="card-text">Baltimore MD,USA 4508</p>
            </div>
            </div>
          </div>

        </div>
      </div> 

      <div className="container mt-5 contacttag">
        <h1 className="contancttag ml-4 ">CONTACT FORM</h1>
        
             <div className="col-sm-12 ">
                <Formik
                
                 initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  message: '',
                }}
                  validationSchema={FormValidationSchema}
                  onSubmit={(values) => {
                    handleformsubmit(values)

                  }} 
                  >
                  <Form >
                    <div className="row justify-content-around ml-1">
                      <div className="col-sm-12  col-lg-4  mt-3"> <Field className="form-control "  type="text" name="name" placeholder="Enter Name"  />
                        <p className=" text-danger"><ErrorMessage name="name" /></p>
                      </div>
                      <div className="col-sm-12  col-lg-4 mt-3 "><Field className="form-control  "  type="text" name="email" placeholder="Enter Email"  />
                        <p className="text-danger"><ErrorMessage name="email" /></p>
                      </div>
                      <div className="col-sm-12  col-lg-4 mt-3 "> <Field className="form-control  " type="number" name="phone" placeholder="Enter Phone No."  />
                        <p className="text-danger"><ErrorMessage name="phone" /></p>
                      </div>
                    </div>
                    <div className=" col-sm-12  mt-3 "><Field  as="textarea" rows="8" className=" form-control  mt-2 "  type="text" name="message" placeholder="message"  />
                      <p className="text-danger"><ErrorMessage name="message" /></p> 
                    </div>
                    <div className="col-md-12 text-center "><button className="sendbutton" type="submit">SEND</button></div>
                  </Form>
                </Formik>
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
export default Contact;
