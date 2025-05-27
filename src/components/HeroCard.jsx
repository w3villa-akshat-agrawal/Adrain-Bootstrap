import React from 'react'
import "../styles/HeroCardBg.css"
const HeroCard = () => {
  return (
    <div>
        <div className="row w-full px-md-0 px-2 mx-2 mx-md-0 heroCardbg"  style={{
    minHeight: "70vh",
    backgroundImage: `url('/S1.png')`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
        <div className="col-lg-6 col-sm-1"></div> 
        <div className="col-lg-6 col-sm-11 col-11 d-flex align-items-center">
            <div className='d-flex flex-column'>
              <span className='fs-5'>Winter collection</span>  
              <span className='text-danger fs-1'>70% off on </span> <span className='fs-1'>everything</span>
              <button className='bg-danger text-white py-md-2 py-1 w-50 rounded-1 border-0 '>Buy Now</button>
                
                </div></div> 
        </div>
    </div>
  )
}

export default HeroCard