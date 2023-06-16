import React from 'react'
import './style.css'

export default function Feat() {
  return (
    <div className="feat-wrapper">
    <div className="row">
        <h1 className='feat-h1'>Our Features</h1>
      </div>
    <div className="feat-main">
        
    <div className="contain">
        <div className="boxes">
            <h2>01</h2>
            <h3>Secret and private</h3>
            <p>
            The use of Dear Diary is private only. There is no feature to make entries publicly viewable. This ensures that your secret diary remains safe from prying eyes. Just like in a good old paper diary.

            </p>
        </div>
        <div className="boxes">
            <h2>02</h2>
            <h3>Super Secure</h3>
            <p>
            To guarantee you ultimate security, monkkee uses a comprehensive security concept. Client-side encryption, AES, SSL – find out more about security and why Dear Diary is unique.

            </p>
        </div>
        <div className="boxes">
            <h2>03</h2>
            <h3>Access via Internet</h3>
            <p>
            To use Dear Diary all you need is a computer with Internet access. Whether you are at home or on the move – if you have a sudden urge to write, you can access your data at any time and from anywhere.
            </p>
        </div>
    </div>
    </div>
    </div>
  )
}
