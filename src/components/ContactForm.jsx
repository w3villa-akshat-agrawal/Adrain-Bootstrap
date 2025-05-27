import React from 'react'
import Navbar1 from './Navabr1'

const ContactForm = () => {
  return (
    <>
        <Navbar1/>
        <div className="container">
            <div className="w-50 m-auto p-3 ">
                <div className='text-center'>
                    <span className='fs-2'><img src="logo.png" alt="" /></span>
                <div className='bg-light py-2'>
                    <span className='fs-4'> customer contact form</span>
                </div>
                </div>
                <div className="inputFields px-4 py-2">
                    <div className="name d-flex align-items-center justify-content-between mt-3">
                        <div className="firstName d-flex flex-column gap-1">
                            <span className='fs-4 text-secondary'>  first name</span>
                            <input className='text-dark py-2 rounded' type="text" placeholder='first name'/>
                        </div>
                         <div className="lastName d-flex flex-column gap-1">
                            <span className='fs-4 text-secondary'> last name</span>
                            <input className='py-2 rounded' type="text" placeholder='last name'/>
                        </div>
                    </div>
                    <div className="email d-flex flex-column mb-2">
                        <span className='fs-4 text-secondary'>email</span>
                        <input  className='py-2 rounded' type="text " placeholder='email' />
                    </div>
                      <div className="email d-flex flex-column mb-2">
                        <span className='fs-4 text-secondary'>phone no</span>
                        <input  className='py-2 rounded' type="text " placeholder='phone no' />
                    </div>
                      <div className="email d-flex flex-column mb-2">
                        <span className='fs-4 text-secondary'>contact</span>
                        <input  className='py-2 rounded' type="text " placeholder='contact' />
                    </div>
                      <div className=' py-2 text-center my-3 bg-success text-white'>
                    <span className='fs-4 rounded border-0'> contact us </span>
                </div>
                </div>
            
            </div>
        </div>

    </>   
  )
}

export default ContactForm