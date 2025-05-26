import React from 'react'

const HeroCard = () => {
  return (
    <div>
        <div className="row w-full"  style={{
    minHeight: "70vh",
    backgroundImage: `url('/S1.png')`,
    backgroundSize: "cover",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
        <div className="col"></div> 
        <div className="col d-flex align-items-center">
            <div className='d-flex flex-column'>
              <span className='fs-5'>Winter collection</span>  
              <span className='text-danger fs-1'>70% off on </span> <span className='fs-1'>everything</span>
              <button className='bg-danger text-white py-2 w-50 rounded-1 border-0 '>Buy Now</button>
                
                </div></div> 
        </div>
    </div>
  )
}

export default HeroCard