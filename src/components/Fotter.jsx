import React from 'react'
import "../styles/Fotter.css"
const Fotter = () => {
  return (
    <div className='container-fluid bg-light  py-5'>
        <div className="w-75 m-auto">
            <div className="row">
                <div className="col-12  col-sm-6  pb-5 pb-lg-0  col-lg-5 d-flex flex-column gap-3 text-center text-sm-start ">
                    <div>
                        <img src="logo.png" alt="" />
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>
                        location:Noida,Up <br />
                        Suport Email : support1@gmail.com
                    </span>
                </div>
                <div className="col-lg-2  col-sm-6 pb-5 pb-lg-0 col-12 d-flex flex-column  gap-3 text-sm-start  " >
                    <span className='fw-bold text-sm-start text-center'> Company</span>
                    <div className='d-flex flex-column footerMenu gap-3'>
                         <span>men fashion</span>
                    <span>women fashion </span>
                    <span>kid fashion</span>
                    <span>Accesseries</span>
                    <span>Shoe Collection</span> 
                    </div>

                </div>
              <div className="col-lg-2  col-sm-6 pb-5 pb-lg-0 col-12 d-flex flex-column  gap-3 text-sm-start " >
                    <span className='fw-bold text-sm-start text-center'> Useful link</span>
                    <div className='d-flex flex-column footerMenu  gap-3'>
                         <span>men fashion</span>
                    <span>women fashion </span>
                    <span>kid fashion</span>
                    <span>Accesseries</span>
                    <span>Shoe Collection</span> 
                    </div>

                </div>
                <div className="col-lg-3  col-sm-6 pb-0 pb-lg-0 col-12 d-flex flex-column gap-2 text-sm-start">
                    <span className='fw-bold text-sm-start text-center'>Opening hours</span>
                    <div className='d-flex flex-column gap-1'>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span>
                                mon-fri
                            </span>
                            <span>
                                8am to 9pm
                            </span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span>
                                Saturday
                            </span>
                            <span>
                                8am to 9pm
                            </span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <span>
                                sunday
                            </span>
                            <span>
                                8am to 9pm
                            </span>
                        </div>
                    </div>
                    <span className='fw-bold'>call now - 7455966189</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotter