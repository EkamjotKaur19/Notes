import React from 'react'
import './style.css'

export default function Footer() {
  return (
<div className="foot-cont my-0">
  <footer
          className="text-center text-lg-start text-dark"
          >
    <section
             className="d-flex justify-content-between p-2 text-white foot-sect"
             >
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <i className="fab fa-facebook-f me-4"></i>
          <i className="fab fa-twitter me-4"></i>
          <i className="fab fa-google  me-4"></i>
          <i className="fab fa-instagram  me-4"></i>
          <i className="fab fa-linkedin me-4"></i>
          <i className="fab fa-github me-4"></i>
      
      </div>
      <div>
        
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-2">
 
        <div className="row mt-3">
          <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">

            <h6 className="text-uppercase fw-bold">Dear Diary</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p>
            <h3>Introducing Dear Diary: Your Digital Journaling Companion</h3>

Dear Diary is an exceptional online diary app designed to provide a secure and personalized space for capturing your thoughts, memories, and emotions. With its intuitive interface and robust features, Dear Diary simplifies the process of journaling, allowing you to document your life's moments with ease.
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                />
            <p><i className="fas fa-home mr-3"></i> Ludhiana, Punjab</p>
            <p><i className="fas fa-envelope mr-3"></i> ekamjot.chugh@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> +7814776634</p>
          </div>
        </div>
      </div>
    </section>
    <div
         className="text-center copy-foot p-3"
         >
      © 2023 Copyright: Made with Love By Ekamjot Kaur
    </div>
  </footer>
</div>
  )
}
