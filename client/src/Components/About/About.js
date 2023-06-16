import React from 'react'
import img from '../../assets/2672335.jpg'
import '../About/style.css'
import Footer from '../Footer/Footer'

export default function About() {
  return (
    <div className='main-abt' >
        <div className="parents-abt">
            <div className="child title-abt">
                <h3 className='hero-title'><strong className='sp-text'>About Us</strong></h3>

                <p className='abt-text' >Dear Diary is a modern online diary app that allows you to
record your thoughts, experiences, and emotions securely and
privately. It provides a convenient and intuitive platform
for you to document your daily life, reflect on your journey,
and express yourself in a safe space.</p>
<p className='abt-text'>
With Dear Diary, you can create multiple journals, organize
your entries by date or categories, and easily search and
revisit your past entries. The app offers a clean and
user-friendly interface, making it effortless to write,
edit, and manage your diary entries from anywhere, anytime.
</p>
<p className='abt-text'>
Start your journey of self-reflection, personal growth, and
preserving memories with Dear Diary today. Let your thoughts
flow and capture the moments that matter most to you in a
digital diary experience like no other.
</p>
            </div>
            <div className="child">
                <img src={img} alt='' className='img-banner'/>
            </div>
        </div>
      <Footer />
    </div>
  )
}
