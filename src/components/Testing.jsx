import React from 'react'

const Testing = () => {
  return (
    <div>
        <nav>
            <div className="heading">
                <h1>Testing Page</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
                <li>Portfolio</li>
            </ul>
        </nav>
        const handelClick = () => {
            alert("Button Clicked!");
        }
        <button onClick={handelClick}>Click Me</button>
        <div className="content">
            <p>This is a testing page to check the functionality of the components.</p>                     
    </div>
  )
}

export default Testing