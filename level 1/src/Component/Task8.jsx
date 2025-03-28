import React from 'react'

export const Task8 = ({role}) => {
  return (
    <>
    <div>Task8</div>
    {role === "admin" ? (
        <h2>Welcome, Admin! You have full access.</h2>
      ) : role === "user" ? (
        <h2>Welcome, User! You have limited access.</h2>
      ) : (
        <h2>Welcome, Guest! Please log in.</h2>
      )}
      </>
  )
}
