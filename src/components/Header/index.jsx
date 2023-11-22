import React from 'react'
import img2 from "../../images/home 1.png"
import "./header.css"
import img3 from "../../images/dawood shah image.png"
import img4 from "../../images/Header 3.png"
import img8 from "../../images/Rectangle.png"
import img9 from "../../images/icon-2.png"
import img10 from "../../images/frame 2.png"
import img11 from "../../images/header 11 icon2 (1).png"
import img12 from "../../images/header 11 icon2 (2).png"
import img15 from "../../images/image 3.png"
import img16 from "../../images/header-16 1.png"
import img17 from "../../images/header-16 2.png"
import img18 from "../../images/header-16 3.png"
import img19 from "../../images/header-16 4.png"
import img20 from "../../images/header-16 5.png"
import Membercard from '../Membercard'

import Servicecard from '../Servicecard'
import Blogcard from '../Blogcard'

function Header() {
  return (
    <>
  <div className="container">
    <div className="row">
        <div className="col-5">
         <div className="header-1-contents">
          <h3 className='mt-2'><span>BIT</span>CODER<span>LABS</span></h3>
          <h1 className='mt-2'><span>SOUND,</span> FOCUSED & <br/> INNOVATIVE</h1>
          <p className='mt-2'>3 Words that Better Describe Our <br/>
          Approach And Our Team!</p>
          <button className='mt-5'>Contact Us</button>
         </div>
        </div>
        <div className="col-7">
            <div className="header-1-img">
             <img src={img2} alt="Home 1" />
            </div>

        </div>
    </div>
  </div>

<div className="container-fluid ps-5">
  <div className="row">
    <div className="col-7">
      <div className="header-2-contents ">
      <h1><span>CEO</span> MESSAGE</h1>
      <p className='mt-5'> As the CEO of a leading technology company, I am proud to serve a client base that is <br/>
     dedicated to driving innovation and growth. Our commitment to delivering exceptional <br/>
      solutions and services has made us a trusted partner to many of the world's leading <br/>
     organizations.<br/>
    In an ever-changing landscape, it is more important than ever to have a partner that <br/>
     you can rely on. That is why I want to assure you that our team is fully committed to <br/> 
     providing you with the highest level of service and support. We understand the crucial <br/>
      role that technology plays in driving success for your business, and we are here to help <br/>
       you achieve your goals. I am honored to serve as the CEO of a company that is making <br/>
      a difference in the tech industry. I am confident that our commitment to excellence and <br/> 
    innovation will continue to drive success for our clients for many years to come.<br/>
    Thank you for your continued partnership. We look forward to working with you to <br/> 
    drive success for your business.</p>
      </div>
    </div>
    <div className="col-5">
      <div className="header-2-img mb-5">
      <img className="img-fluid" src={img3} alt="dawood shah image" />
      </div>
    
    </div>
  </div>
</div>



<div className="container-fluid ps-5">
  <div className="row">
    <div className="col-7">
      <div className="header-3-contents ">
      <h1><span>OUR</span> MISSION</h1>
      <p className='mt-5'>At BitcoderLabs, our mission is to empower people and <br /> 
      organizations through innovative software solutions that <br /> 
       transform the way they work and interact with the world.<br /> 
We're also dedicated to building long-lasting relationships <br /> 
 with our clients, understanding their unique needs and <br /> 
  goals, and delivering solutions that exceed their <br /> 
   expectations. <br /> 
Our team of experienced developers, designers,<br /> 
 and project managers are committed to upholding <br /> 
  these values and delivering exceptional results.<br /> 
   We look forward to partnering with you to achieve <br /> 
    your goals and make a difference in the world.
</p>
      </div>
    </div>
    <div className="col-5">
      <div className="header-3-img mb-5">
      <img className="img-fluid" src={img4} alt="dawood shah image" />
      </div>
    
    </div>
  </div>
</div>


<div className="container header-4">
  <div className="row">
    <div className="col-12">
      <div className="header-4-contents">
      <h1>We can help to maintain and modernize your IT infrastructure & solve <br />
       various infrastructure-specific issues a business may face.</h1>
      <button className='mt-5'>More About  Us</button>
      </div>
    </div>
  </div>
</div>


<div className="container header-5">
  <div className="row">
    <div className="col-12">
      <div className="header-5-contents my-5">
      <h6>Our  Expert  People</h6>
      <h5>MEET OUR PROFESSIONAL</h5>
      <h2>TEAM MEMBERS</h2>
      </div>
    </div>
  </div>
</div>

<div className="container member-card-header">
  <div className="row">
    <div className="col-4">
       <Membercard/>
    </div>
    <div className="col-4">
       <Membercard/>
    </div>
    <div className="col-4">
       <Membercard/>
    </div>
  </div>
</div>



<div className="container header-6 ">
  <div className="row">
    <div className="col-12">
      <div className="header-6-contents my-5">
      <h6>What We’re Offering</h6>
      <h5>EXPANDING YOUR TECH HORIZONS</h5>
      <h2>TECHNICAL TRAININGS</h2>
      </div>
    </div>
  </div>
</div>


<div className="container mt-5">
  <div className="row">
    <div className="col-6">
     <div className="header-7-slider">
      <div className="slider-img">
        <img src={img8} alt="slider img" />
      </div>
      <div className="slider-icons my-4">
        <span className='active '></span><span className="ms-1"></span> <span className="ms-1"></span> <span className="ms-1"></span>
      </div>
     </div>
    </div>
    <div className="col-6">
      <div className="slider-contents">
      <p>A session on Field Selection and Freelancing Training 
        in IM Sciences carried out in Peshawar. First, we started
         with an overview of the field selection. This session included
          an introduction to the various fields, such as data management, 
          information systems, and database management. Participants gained 
          a better understanding of the range of specializations available to
           them within the field. Next, we delved into field selection. Choosing
            a specific area of study can be a challenging process, but we provided
             participants with a comprehensive guide to help them make an informed
              decision. This included information on job prospects, skill <br />
               requirements,
               and more.</p><span className='ms-5'>Read More...</span>
      </div>
      
    </div>
  </div>
</div>

<div className="container">
  <div className="row">
    <div className="col-12 icon-2 my-5 d-flex justify-content-center">
      <img src={img9} alt="icon-2" />
    </div>
  </div>
</div>


<div className="container header-8">
  <div className="row">
    <div className="col-12">
      <div className="header-8-contents my-5">
      <h6>What We Do</h6>
      <h5>DEALING IN ALL PROFESSIONAL</h5>
      <h2>IT SERVICES</h2>
      </div>
    </div>
  </div>
</div>


<div className="container header-9">
  <div className="row">
    <div className="col-4">
      <Servicecard/>
    </div>
    <div className="col-4">
      <Servicecard/>
    </div>
    <div className="col-4">
      <Servicecard/>
    </div>
  </div>
</div>



<div className="container header-10">
  <div className="row">
    <div className="col-12">
      <div className="header-10-contents my-5">
      <h6>Client Testimonials</h6>
      <h2>What They’re Talking</h2>
      </div>
    </div>
  </div>
</div>



<div className="container">
  <div className="row">
    <div className="col-4">
     <div className="header-11-img">
      <img className='img fluid' src={img10} alt="frame 2" />
     </div>
    </div>
    <div className="col-8">
    <div className="header-11-contents">
     <p>BitcoderLabs is an professional IT Company  that always
       creates quality software for clients. If you’re looking 
       for a team of talent developers to find out the best IT Solutions,
        BitcoderLabs is a company that your team should consider.</p>
        <h6>Abbas Ali Shah</h6>
        <div className="header-11-icons">
          <img src={img11} alt="header-11-icons" />
          <img src={img12} alt="header-11-icons" />
        </div>

    </div>
    </div>
  </div>
</div>



<div className="container header-12">
  <div className="row">
    <div className="col-12">
      <div className="header-12-contents my-5">
      <h6>What’s Happening </h6>
      <h2>Blogs and Articles</h2>
      </div>
    </div>
  </div>
</div>

<div className="container my-5">
  <div className="row">
    <div className="col-4">
      <Blogcard/>
    </div>

    <div className="col-4">
      <Blogcard/>
    </div>

    <div className="col-4">
      <Blogcard/>
    </div>
  </div>
</div>


<div className="container">
  <div className="row">
    <div className="col-12 icon-2 my-5 d-flex justify-content-center">
      <img src={img9} alt="icon-2" />
    </div>
  </div>
</div>



<div className="container my-5">
  <div className="row">
    <div className="col-5">
    <img src={img15} alt="image" />
    </div>
    <div className="col-7">
     <div className="header-13-content">
      <h1 className='text-center mb-5'>Why Choose Us?</h1>
      <h6 className='mb-5'>BitcoderLabs is a pioneering technology leader working 
       closely with a wide spectrum of clients to transform their
       ideas into engaging and feature-rich applications.</h6>

     </div>
     <div className="header-13-text-1 mb-5">
     <span>7+ </span><p>YEARS OF EXPERIENCE</p>
     <span>980+ </span><p>PROJECTS COMPLETED</p>
     </div>

     <div className="header-13-text-2">
     <span>25+ </span><p>DEVELOPMENT STAFF</p>
     <span>474+ </span>
     <p>DEVELOPMENT STAFF</p>
     </div>
    </div>
  </div>
</div>

<div className="header-14-text">
  <h1>Technologies We Work With</h1>
</div>

<div className="container my-5">
  <div className="row">
    <div className="col-12">
    <div className="header-15-list">
         <a  href="#">Mobile</a>
         <a className='active' href="#">Frontend</a>
         <a href="#">Backend</a>
         <a href="#">Database</a>
        </div>
    </div>
  </div>
</div>


<div className="container header-16-top">
  <div className="row row-cols-5">
    <div className="col ">
      <div className="header-16">
      <div className="header-16-text my-5">
        <h6>Angular</h6>
      </div>
      <div className="header-16-icons">
        <img src={img16} alt="header-16" />
      </div>
      </div>
    </div>


    <div className="col">
      <div className="header-16">
      <div className="header-16-text my-5">
        <h6>React.js</h6>
      </div>
      <div className="header-16-icons">
        <img src={img17} alt="header-16" />
      </div>
      </div>
    </div>


    <div className="col">
      <div className="header-16">
      <div className="header-16-text my-5">
        <h6>Vue</h6>
      </div>
      <div className="header-16-icons">
        <img src={img18} alt="header-16" />
      </div>
      </div>
    </div>


    <div className="col">
      <div className="header-16">
      <div className="header-16-text my-5">
        <h6>Bootstrap</h6>
      </div>
      <div className="header-16-icons">
        <img src={img19} alt="header-16" />
      </div>
      </div>
    </div>


    <div className="col">
      <div className="header-16">
      <div className="header-16-text my-5">
        <h6>Kotlin</h6>
      </div>
      <div className="header-16-icons">
        <img src={img20} alt="header-16" />
      </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default Header