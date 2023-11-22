import React from 'react'
import ReactStars from "react-rating-stars-component";
import img13  from "../../images/thumbnail.png"
import img14 from "../../images/blog icon.png"
import "./blogcard.css"
function Blogcard() {
  return (
    <>
    <div className="blog-card">
  <img src={img13} className="card-img-top" alt="..."/>
   <div className="blog-card-body">
    <h5>Constructive and destructive waves</h5>
    <h6>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</h6>
    <p>2 hours 40 minutes</p>
  
  <div className="blog-card-icon">
  <span>
  
  <ReactStars
    count={5}
    // onChange={ratingChanged}
    size={20}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
  </span>

  <span className='span-icon'>
    <img src={img14} alt="blog icon" />
  </span>

  </div>
  </div>
</div>

    </>
  )
}

export default Blogcard