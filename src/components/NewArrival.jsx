import React from 'react'
import NewCard from './NewCard'
import "../styles/NewArrival.css"
const NewArrival = () => {
  return (
    <div className='container-fluid '>
        <div className=' w-75 m-auto mt-5  mb-5 cc '>
            <div className='d-flex flex-column align-items-center' >
                <span className='fs-1 fw-bold'>New Arrival</span>
                <span className='mb-md-5 mb-3 text-center '>the best online sales to shop these weekend</span>
                <div className="row gy-3 cardcontainer">
                    <div className="col">
                        <NewCard/>
                    </div>
                    <div className="col-md-4 col-sm-6 col-lg-3  col-12"><NewCard/></div>
                    <div className="col-md-4 col-sm-6 col-lg-3  col-12"><NewCard/></div>
                    <div className="col-md-4 col-sm-6 col-lg-3 col-12"><NewCard/></div>
                    <div className="col-md-4 col-sm-6 col-lg-3 col-12"><NewCard/></div>
                    <div className="col-md-4 col-sm-6 col-lg-3 col-12"><NewCard/></div>
                    <div className="col-md-4  col-sm-6 col-lg-3 col-12"><NewCard/></div>
                    <div className="col-md-4 col-sm-6 col-lg-3 col-12"><NewCard/></div>
                </div>
            </div>
        </div></div>
        
  )
}

export default NewArrival