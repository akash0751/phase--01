import React from 'react'

const Task12 = ({isLoggedIn}) => {
  return (
    <div>
      <h2>{isLoggedIn ? "Welcome back!" : "Please log in"}</h2>
    </div>
  )
}

export default Task12