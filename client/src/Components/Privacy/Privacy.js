import React from 'react'
import img from '../../assets/priv.jpg'
import './style.css'

export default function Privacy() {
  return (
    <div className='main-priv' >
        <div className="parents-abt">
            <div className="child title-abt">
                <h3 className='hero-title'><strong className='sp-text'>Privacy</strong></h3>

                <p className='abt-text' >Privacy Policy:
At Dear Diary, we value the privacy and security of our users' personal information and diary entries. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our diary app. By using our app, you consent to the practices described in this policy.</p>
<p className='abt-text'>
We collect certain personal information during the registration process, such as your name, email address.
</p>
<p className='abt-text'>

We do not share your personal information or diary entries with third parties. We use the information we collect to provide you with our diary app services and to personalize your experience by creating and maintaining your user account, storing and organizing your diary entries.
</p >
<p className='abt-text'>

We do not share your personal information or diary entries with third parties
</p>
            </div>
            <div className="child">
                <img src={img} alt='' className='img-banner'/>
            </div>
        </div>
    </div>
  )
}
