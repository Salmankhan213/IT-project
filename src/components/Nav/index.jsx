import React from 'react'
import img1 from "../../images/nav logo.png"
import "./nav.css"

function Nav() {
  return (
    <div className='container'>
       <div className="row">
        <div className="col-4">
        <div className="nav-logo">
        <img src={img1} alt="logo-img" />
        </div>
        </div>
        <div className="col-8">
        <div className="nav-list">
         <a className='availaible' href="#">Home</a>
         <a href="#">About Us</a>
         <a href="#">Training</a>
         <a href="#">Services</a>
         <a href="#">Contact Us</a>
         <a href="#">Blogs</a>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Nav