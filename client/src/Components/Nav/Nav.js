import { ReactComponent as Brand } from '../../assets/logoipsum-226.svg'
import { NavLink } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom';
import './style.css'
import { useState, useContext } from 'react'
import { AuthContext } from '../AuthContext';

const Navbar = () => {
  const { loggedIn, setLoggedIn,  cook, setCook } = useContext(AuthContext);
    const [showNavbar, setShowNavbar] = useState(false)
    const navigate=useNavigate();

    const handleLogout = () => {
      window.localStorage.removeItem('loggedNoteappUser')
      setLoggedIn(!loggedIn)
      setCook(!cook)
      navigate('/')
    }
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
  
    return (
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Brand />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            Menu
          </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {cook ?
              <>
              <li>
                <button className= 'logo-btn' onClick={handleLogout} >Logout</button>
              </li>
              <li>
                <NavLink to="/create">Notes</NavLink>
              </li>
              </>
            :
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
}
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
  
  export default Navbar