import React from 'react'
import "../styles/Card.css"
const Card = () => {
  return (
    <div className="container-fluid">
        <div className='w-75  px-1 m-auto px-sm-2 cardContainer mt-3'>
           <div className="row gx-3 row-cols-1 gap-lg-0  gap-3 row-cols-lg-3">
  <div className="col">
    <img src="cat-1.jpg" className="img-fluid" alt="" />
  </div>
  <div className="col">
    <img src="cat-2.jpg" className="img-fluid" alt="" />
  </div>
  <div className="col">
    <img src="cat-3.jpg" className="img-fluid" alt="" />
  </div>
</div>

        </div>
    </div>
  )
}

export default Card