import React from 'react'
import "./footer.css"
import img21 from "../images/facebook.png"
import img22 from "../images/insta.png"
import img23 from "../images/linkin.png"
import img24 from "../images/twitter.png"
import img25 from "../images/phone.png"
import img26 from "../images/text.png"
import img27 from "../images/internet.png"

function Footer() {
  return (
    <>
    <div className="container-fluid footer-top">
        <div className="row footer-row">
            <div className="col-4 footer-column">
            <div className="footer-content-1">
            <h6>BitCoder <span>Labs</span></h6>
             <p >We work with a passion of taking challenges and creating new ones in advertising sector.</p>
            </div>

            <div className="footer-icons pt-4">
                <img src={img21} alt="facebok" />
                <img src={img22} alt="insta" />
                <img src={img23} alt="linkin" />
                <img src={img24} alt="twitter" />
            </div>
            </div>
            <div className="col-4 footer-column">
                <div className="footer-contents-2">
                <h5>Links</h5>
                <a href="#">About Us</a>
                <a href="#">Team</a>
                <a href="#">Trainings</a>
                <a href="#">Services</a>
                <a href="#">Contact Us</a>
                <a href="#">Blog</a>
                </div>
                
                
            </div>
            <div className="col-4 footer-column">
                <div className="footer-floor">
                <div className="footer-contents-3">
                    <h5>Contact Us</h5>
                </div>
                <div className="footer-icons-2 pt-5">
                    <img src={img25} alt="phone" />
                    <h5>+92 333 9277021</h5>
                </div>
                <div className="footer-icons-2 pt-2">
                    <img src={img26} alt="text" />
                    <h5>info@bitcoderlabs.com</h5>
                </div>
                <div className="footer-icons-2 pt-2">
                    <img src={img27} alt="internet" />
                    <h5>www.bitcoderlabs.com</h5>
                </div>
                </div>
               
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer