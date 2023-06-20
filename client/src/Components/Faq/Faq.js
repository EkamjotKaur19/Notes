import React, { useState } from "react";
import {
  MDBCollapse,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBTypography,
} from "mdb-react-ui-kit";
import './style.css'

export default function Faq() {
  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);

  const toggleCollapse1 = () => setCollapse1(!collapse1);
  const toggleCollapse2 = () => setCollapse2(!collapse2);
  const toggleCollapse3 = () => setCollapse3(!collapse3);

  return (
    <>
    <div className="row-faq">
        <h1 className='feat-h1'>Frequently Asked Questions (FAQs)</h1>
      </div>
    <div className="faq-cont">
        
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
    
        
      <MDBListGroup>
      <div className="col-cont">
        <MDBListGroupItem tag="a"  onClick={toggleCollapse1} action>
          <MDBTypography tag="h5">How do I create an account on Dear Diary?</MDBTypography>
          <p className="mb-1">Click on the SignUp button!</p>
          <small>
            <u>Learn more</u>
          </small>
          
          <MDBCollapse show={collapse1}>
          To create an account on Dear Diary, simply click on the "Sign Up" button on the homepage and fill out the registration form with your details. Once submitted, you will be redirected to the login page where you can fill your details to log in
          </MDBCollapse>
          
        </MDBListGroupItem>
        </div>
        <MDBListGroupItem tag="a" onClick={toggleCollapse2} action>
          <MDBTypography tag="h5"> Can I access my diary entries from multiple devices?</MDBTypography>
          <p className="mb-1">Yes, you can.</p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse2}>
          Yes, you can access your diary entries from multiple devices. Dear Diary offers synchronization across devices, allowing you to seamlessly access your diary from your computer, smartphone, or tablet.
          </MDBCollapse>
        </MDBListGroupItem>
        <MDBListGroupItem tag="a"  onClick={toggleCollapse3} action>
          <MDBTypography tag="h5">Are my diary entries secure and private?</MDBTypography>
          <p className="mb-1">Absolutely! We prioritize the security and privacy of your diary entries. </p>
          <small>
            <u>Learn more</u>
          </small>
          <MDBCollapse show={collapse3}>
          Dear Diary uses advanced encryption and secure servers to ensure that your personal information and entries are kept confidential. Only you have access to your diary unless you choose to share specific entries.
          </MDBCollapse>
        </MDBListGroupItem>
      </MDBListGroup>
    </MDBContainer>
    </div>
    </>
  );
}