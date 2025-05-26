import React from 'react'

const Fotter = () => {
  return (
    <div className='container-fluid bg-light  py-5'>
        <div className="w-75 m-auto">
            <div className="row">
                <div className="col-5 d-flex flex-column gap-3 ">
                    <div>
                        <img src="logo.png" alt="" />
                    </div>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                    <span>
                        location:Noida,Up <br />
                        Suport Email : support1@gmail.com
                    </span>
                </div>
                <div className="col-2 d-flex flex-column align-items-center gap-3  " >
                    <span className='fw-bold'> Company</span>
                    <div className='d-flex flex-column align-items-center gap-3'>
                         <span>men fashion</span>
                    <span>women fashion </span>
                    <span>kid fashion</span>
                    <span>Accesseries</span>
                    <span>Shoe Collection</span> 
                    </div>

                </div>
              <div className="col-2 d-flex flex-column align-items-center gap-3  " >
                    <span className='fw-bold'> Useful link</span>
                    <div className='d-flex flex-column align-items-center gap-3'>
                         <span>men fashion</span>
                    <span>women fashion </span>
                    <span>kid fashion</span>
                    <span>Accesseries</span>
                    <span>Shoe Collection</span> 
                    </div>

                </div>
                <div className="col-3 d-flex flex-column gap-2">
                    <span className='fw-bold'>Opening hours</span>
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