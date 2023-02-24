import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useRef } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const FormValidationSchema = Yup.object().shape({
    fname: Yup.string().required("Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: Yup.string().required('Email is Required').email('Invalid email'),
    password: Yup.string().required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    conpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required("must be rquired"),
    role:Yup.string().required("selction is required"),
  });


  const captchaRef = useRef(null)

  const handleformsubmit = (values) => {
      // console.log("form submit  sucuessfully",values);
    window.localStorage.setItem("userinfo", JSON.stringify(values));
   
    
   
  }

  return (
    <div className="container">
      <div className="text-center">
        <h3>  Login Form</h3> </div>
      <div className="col-sm-12 ">
        <Formik initialValues={{
          fname: '',
          email: '',
          password: '',
          conpassword: '',
          role:'',
        }}
          validationSchema={FormValidationSchema}
          onSubmit={(values) => {
            handleformsubmit(values)
          }} >
          <Form>

            <div className='col-md-12 form-group'>
              <div className="col-md-12 mt-3"> <Field className="form-control " type="text" name="fname" placeholder="Enter Name" />
                <p className=" text-danger"><ErrorMessage name="fname" /></p>
              </div>
              <div className="col-md-12 mt-3 "><Field className="form-control " type="text" name="email" placeholder="Enter Email" />
                <p className="text-danger"><ErrorMessage name="email" /></p>
              </div>
              <div className="col-md-12 mt-3 "> <Field className="form-control " type="text" name="password" placeholder="Enter password" />
                <p className="text-danger"><ErrorMessage name="password" /></p>
              </div>
              <div className="col-md-12 mt-3 "><Field className="form-control" type="text" name="conpassword" placeholder="Confirm password" />
                <p className="text-danger"><ErrorMessage name="conpassword" /></p>
              </div>
              <div className="col-md-12 mt-3 "><Field  className="form-control" as="select" type="text" name="role"  >
                <option value="">Select role</option>
                <option value="admin" >admin</option>
                <option value="user" >user</option>
              </Field>
                <p className="text-danger"><ErrorMessage name="role" /></p>
              </div> 
              
                <div className="col-md-12  "><button className="btn btn-primary form-control" type="submit">Submit</button></div>               
            </div>
          </Form>
        </Formik>

      </div>
    </div>






  );
}


