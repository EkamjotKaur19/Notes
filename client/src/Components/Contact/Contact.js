import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './style.css'
import Footer from "../Footer/Footer";


const Contact = ({darkMode}) => {
  const form = useRef();

  const handleSend = () =>{
    alert("Mail has been sent!!")
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5ds5atj",
        "template_tk8gjll",
        form.current,
        "27JceM2gG75iJkfXc"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>

    <div className="containerc">
        <div className="cont-head">
            <h2>Have a Feedback or a Question?</h2>
            <h1>Contact Us</h1>
            </div>
      <div className="contact-parent">
        <div className="contact-child child1">
            
        </div>
        <div className="contact-child child2">
            <div className={!darkMode?"contact-form" :"contact-form-dark"}>
      <form ref={form} onSubmit={sendEmail} className='form2' >

      <div className="inside-contact">
            
            <h3>
               <span id="confirm"/>
            </h3>
            <p>Name *</p>
            <input id="txt_name" name="user_name" type="text" Required="required"/>
            <p>Email *</p>
            <input id="txt_email" name="email" type="text" Required="required"/>
            <p>Phone *</p>
            <input id="txt_phone" type="text" Required="required"/>
            
            <label>Message</label>
            <textarea name="message" />
        <input type="submit" value="Send" onClick={handleSend} />
         </div>
      </form>
    </div>
        </div>
      </div>
    </div>
    <Footer />

    </>
  );
};

export default Contact;
