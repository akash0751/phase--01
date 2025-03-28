import React from 'react'
import image from '../assets/images.jpg'
export const Task3 = () => {
  return (
    <>
    <div>
        <div style={{border:"3px solid",textAlign:"center",
            backgroundColor:"lightgrey",borderRadius:"10px"
        }} >
            <h3>Hi There</h3>
            <img src={image} alt='John Cena'/>
            <p>It's a basic web page which displays message using react</p>

        </div>
    </div></>
  )
}
