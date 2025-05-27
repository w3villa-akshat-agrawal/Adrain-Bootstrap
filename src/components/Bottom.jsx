import React from 'react'

const Bottom = () => {
  return (
    <div className='container-fluid border-top '>
        <div className="w-75 m-auto py-4">
            <div className="row">
                <div className="col-lg-3  col-12 gy-3 pb-3 col-sm-6 d-flex align-items-center gx-3">
                    <div>
                        <i  class="ri-riding-line text-danger fs-2"></i>
                    </div>
                    <div className='ps-4 d-flex flex-column' >
                        <span className='fw-bold'>Free Shiping</span>
                        <span>on all orders above $40</span>
                    </div>
                </div>
                 <div className="col-lg-3 col-12 gy-3 pb-3 col-sm-6 d-flex align-items-center gx-3">
                    <div>
                        <i class="ri-wallet-line text-danger fs-2"></i>
                        {/* <i  class="ri-riding-line text-danger fs-2"></i> */}
                    </div>
                    <div className='ps-4 d-flex flex-column' >
                        <span className='fw-bold'>30 days return</span>
                        <span>on all orders above $40</span>
                    </div>
                </div>
                 <div className="col-lg-3 col-12 gy-3 pb-3 col-sm-6 d-flex align-items-center gx-3">
                    <div>
                        <i class="ri-key-2-fill text-danger fs-2"></i>
                        {/* <i  class="ri-riding-line "></i> */}
                    </div>
                    <div className='ps-4 d-flex flex-column' >
                        <span className='fw-bold'>Secure checkout</span>
                        <span>on all orders above $40</span>
                    </div>
                </div>
                 <div className="col-lg-3 col-12 gy-3 pb-3 col-sm-6 d-flex align-items-center gx-3">
                    <div>
                        <i class="ri-time-line text-danger fs-2"></i>
                    </div>
                    <div className='ps-4 d-flex flex-column' >
                        <span className='fw-bold'>24/7 support</span>
                        <span>on all orders above $40</span>
                    </div>
                </div>
                
               
            </div>
        </div>
    </div>
  )
}

export default Bottom