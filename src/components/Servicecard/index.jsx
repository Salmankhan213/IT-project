import React from 'react'
import img10 from "../../images/Frame 1.png"
import "./servicecard.css"

function Servicecard() {
  return (
    <>
    <div className="service-all">
    <div className="service-card">
    <div className="service-image">
        <img src={img10} alt="service-icon-1" />
    </div>
    
    <div className="service-contents">
        <h4 className='my-5 text-center'>Website Development</h4>
        <h6 className='text-center'> User-Interactive & Result-Oriented Web App Development Services!</h6>
        <p className='my-5 text-center'>Know More!</p>
    </div>
    </div>
    </div>
    
    
    
    </>
  )
}

export default Servicecard