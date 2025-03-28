import React from 'react'
import { useState } from 'react'

const Task10 = () => {
    const [data, setData] = useState({email:"",name:""})
    
    const handleChange=(e)=>{
       setData({...data,[e.target.name]:e.target.value})
    }

    const submitForm =(e)=>{
        e.preventDefault();
        alert('Submitted Successfully')
        setData({email:"",name:""})
        console.log(data)
    }
  return (
    <>
    <div>Task10</div>
    <br></br><br></br>
    <div>
        <form onSubmit={submitForm}>
        <input type='text'
        name='name'
        value={data.name}
          placeholder='Enter your name'
          onChange={handleChange}
        ></input>
       <br></br><br></br>
        <input type='email'
        name='email'
        value={data.email}
        placeholder='Enter your Email Id'
        onChange={handleChange}
        ></input>
         <br></br><br></br>
        <button>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Task10