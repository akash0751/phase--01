import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().trim().min(5).max(20).required("required"),
    email: yup.string().email("Enter valid Email").required('required'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
})
