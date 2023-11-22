import React from 'react'
import img6 from "../../images/membercard.png"
import img7 from "../../images/membercard icon.png"
import "./membercard.css"
function Membercard() {
  return (
         <>
         
          <div class="member-card-image">
            <img src={img6} class="card-img-top img fluid" alt="member card" />
            <div class="member-card-body">
              <div className="member-card-inner-contents">
              <h6 className='mt-3'>Christine Eve</h6>
              <p>Developer</p>
              </div>
              <div className="member-card-inner-img">
               <img className="img-fluid" src={img7} alt="icon image" />
              </div>
              
            </div>
          </div>
          </>
  )
}

export default Membercard