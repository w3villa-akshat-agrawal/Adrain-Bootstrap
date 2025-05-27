import React from 'react'
import "../styles/Portfolio.css"
const Portfolio = () => {
  return (
    <div>
        <div className="row w-full portfoliobg px-md-0 px-2 mx-2 mx-md-0 "  style={{
    minHeight: "50vh",
    backgroundImage: `url('/S2.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
  }}>
        <div className="col-md-6 "></div> 
        <div className="col-md-6 col-12 d-flex">
            <div className='d-flex flex-column mt-4'>
                <span className='bg-light w-75 p-1 ps-4 mb-2'>deal  of the day 50% off</span>
                <span className='fs-1 mb-3'>Trendy Suit </span>
                <span className='mb-3'>hurry up limited time offer, grab your offer</span>
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="box d-flex align-items-center flex-column bg-secondary text-white px-2 py-1 me-2">
                        <span className='fs-2'>1080</span>
                        <span className='fs-5'>days</span>
                    </div>
                      <div className="box d-flex align-items-center flex-column bg-secondary text-white px-2 py-1 me-2 ">
                        <span className='fs-2'>3</span>
                        <span className='fs-5'>hrs</span>
                    </div>
                       <div className="box d-flex align-items-center flex-column bg-secondary text-white px-2 py-1 me-2 ">
                        <span className='fs-2'>40</span>
                        <span className='fs-5'>minutes</span>
                    </div>
                      <div className="box d-flex align-items-center flex-column bg-secondary text-white px-2 py-1 me-2">
                        <span className='fs-2'>57</span>
                        <span className='fs-5'>sec</span>
                    </div>

                </div>
                <button className='bg-danger w-50 border-0 text-white  py-2'>Shop now</button>
                </div></div> 
        </div>
    </div>
  )
}


export default Portfolio