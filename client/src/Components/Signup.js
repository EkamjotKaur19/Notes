import React, { useState, useEffect } from 'react';
import logo from '../images/p4.png'
import { useNavigate, Link } from 'react-router-dom'
import registerService from '../services/register'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBButton,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Signup() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('') 
    const [name, setName] = useState('') 
    const [password, setPassword] = useState('')
    const handleReg = async (event) => {
      event.preventDefault()
      console.log('reg in with', username, password);
      if (password.length < 6) {
        toast.error('Password should be at least 6 characters long');
        return;
      }
      if (/\d/.test(name)) {
        toast.error('Name should not contain numbers');
        return;
      }
      if (username.length < 5) {
        toast.error('Username should be at least 5 characters long');
        return;
      }
      try{
          const useri = registerService.register({
            name, username, password,
          

          })
          toast.success(`Account Created Successfully`);
          console.log(useri);
          navigate('/login')
          
        } catch (exception) {
          toast.error(`error`);
          console.log('error');
        }
      }

  return (
    <>
    <form onSubmit={handleReg} >
      <MDBContainer fluid  >
        <MDBCardBody className='p-0 signupbox text-black m-1' style={{borderRadius: '25px'}} >
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-1 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h2 fw-bold mx-1 mx-md-3 mt-2 mb-2">Sign up</p>
                <div className="d-flex flex-row align-items-center mb-2 ">
                  <MDBIcon fas icon="user me-2 " size='lg'/>
                  <MDBInput label='Your Name' id='form1' type='text' required={true} className='w-100 mb-0' onChange={({ target }) => setName(target.value)}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-2 ">
                  <MDBIcon fas icon="user me-2" size='lg'/>
                  <MDBInput label='Your UserName' id='form12' type='text' required={true} className='w-100 mb-0' onChange={({ target }) => setUsername(target.value)}/>
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' id='form2' className='mb-0' required={true}  type='email'  />
                </div>

                <div className="d-flex flex-row align-items-center mb-2">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' id='form3' className='mb-0' required={true} type='password' onChange={({ target }) => setPassword(target.value)}/>
                </div>

                <button className='mb-3 reg-btn' size='lg'  >Register</button>
                

              </MDBCol>

              <MDBCol md='10' lg='6' className='mt-0 order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>
            </MDBRow>
        </MDBCardBody>
      </MDBContainer>
    </form>
    </>
  );
}

export default Signup