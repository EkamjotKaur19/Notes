import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../images/p4.png'


function Navbar({dark, handleLogout, logged}) {
  const [isNavOpen,setIsNavOpen] = useState(false);
  const [nav, setNav]=useState(false);
  const navigate=useNavigate();
  const handleReg = () =>{
    setNav(!nav);
    navigate('/signup')
  }

  return <Nav >
    <div className="brand__container">
        <Link to='/React-Projects' className='brand'>
            <img className='logo' src={logo} alt="logo" />
        </Link>  
        <div className="toggle">
        {isNavOpen ? (
            <>
            <div className="nav-mob">
                <button className={!dark?'nav-btn resp mob' : 'nav-btn-dark resp-dark mob'} onClick={ () => setIsNavOpen(false)} >
                <i className={!dark? "fa-regular fa-circle-xmark" :"fa-regular fa-circle-xmark mark-dark"} ></i>
                </button>
                </div>
                <ul className={!logged? 'hid' : ''} >
                <li >
                    <button className={!dark?'nav-btn' : 'nav-btn-dark'} onClick={handleReg}>Register</button>
                </li>
                <li >
                    <button className={!dark?'nav-btn' : 'nav-btn-dark'} onClick={handleLogout} >LogOut</button>
                </li>
                
                </ul>
            
        </>
        ) : (
            <>
            
            <button className={!dark?'nav-btn resp mob' : 'nav-btn-dark resp-dark mob'}
            onClick={ (e) => {
                e.stopPropagation();
                setIsNavOpen(true);
            }}
            >
                <i className="fa-solid fa-bars"></i>
            </button>
            </>
        )}
        </div>
    </div>
    <Links className={ `def links ${isNavOpen ? "show" : ""}`}>
        <ul className={!logged? 'hid' : ''} >
            <li >
                <button className={!dark?'nav-btn' : 'nav-btn-dark'} onClick={handleReg}>Register</button>
            </li>
            <li >
                <button className={!dark?'nav-btn' : 'nav-btn-dark'} onClick={handleLogout} >LogOut</button>
            </li>
        </ul>
    </Links>
  </Nav>
}

const Links = styled.div`
@media screen and (min-width: 280px) and (max-width: 1080px) {
    position: absolute;
    overflow-x: hidden;
    list-style:none;
    top: 0;
    right: 0;
    width: ${({ isNavOpen }) => (isNavOpen ? "100%" : "0%")};
    height: 100vh;
    background-color:black;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s ease-in-out;
  }
    

`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:0;
  color: #fff;
  padding:1.7%;

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
  }
`;

export default Navbar;