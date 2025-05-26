import React from 'react'
import NewCard from './NewCard'

const NewArrival = () => {
  return (
    <div className='container-fluid '>
        <div className=' w-75 m-auto mt-5  mb-5'>
            <div className='d-flex flex-column align-items-center' >
                <span className='fs-3 fw-bold'>New Arrival</span>
                <span className='mb-5'>the best online sales to shop these weekend</span>
                <div className="row gy-3">
                    <div className="col">
                        <NewCard/>
                    </div>
                    <div className="col-3"><NewCard/></div>
                    <div className="col-3"><NewCard/></div>
                    <div className="col-3"><NewCard/></div>
                    <div className="col-3"><NewCard/></div>
                    <div className="col-3"><NewCard/></div>
                    <div className="col-3"><NewCard/></div>
                    <div className="col-3"><NewCard/></div>
                </div>
            </div>
        </div></div>
        
  )
}

export default NewArrival