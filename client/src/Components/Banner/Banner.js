import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../assets/Diary-rafiki(1).png'
import '../Banner/banner.css'

export default function Banner() {
  return (
    <div className='main' >
        <div className="parents">
            <div className="child title">
                <h3 className='hero-title'>The <strong className='sp-text'>Safest</strong>  Place For Your <strong className='sp-text'>Thoughts</strong></h3>

                <p className='hero-title2'>It's Free! Sign up now</p>
                <NavLink to='/signup' className='signup-button' >Sign Up</NavLink>
            </div>
            <div className="child">
                <img src={img} alt='' className='img-banner'/>
            </div>
        </div>
      
    </div>
  )
}
