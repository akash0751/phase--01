import React from 'react'
import {useFormik} from 'formik'
import { formSchema } from './Schema/Schema'
import './Form.css'

const onSubmit =(values,actions)=>{
    console.log("submitted")
    alert("Hello" +" "+values.name+" "+"signed in successfully")
    actions.resetForm();
}
 const Form = () => {

    const {values,errors,handleChange,handleSubmit,isSubmitting} = useFormik({
        initialValues:{
            name:"",
            email:"",
            password: "",
            confirmPassword: ""
        },
        validationSchema:formSchema,
        onSubmit 
    })
    
    console.log(errors)
  return (
    <div className="root">
            <div className='div1'>
                <form onSubmit={handleSubmit}>
                    <label className='label'>Name</label><br />
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        className='inp'
                    />
                    {errors.name && <p className='error'>{errors.name}</p>}
                    <br />

                    <label className='label'>Email</label><br />
                    <input 
                        type='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        className='inp'
                    />
                    {errors.email && <p className='error'>{errors.email}</p>}
                    <br />

                    <label className='label'>Password</label><br />
                    <input 
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        className='inp'
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                    <br />

                    <label className='label'>Confirm Password</label><br />
                    <input 
                        type='password'
                        name='confirmPassword'
                        value={values.confirmPassword}
                        onChange={handleChange}
                        className='inp'
                    />
                    {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
                    <br />

                    <button disabled={isSubmitting} className='btn1'>Submit</button>
                </form>
            </div>
        </div>
    );
}
 export default Form