import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import { useForm} from 'react-hook-form'

export default function LoginScreen() {

    const {
        handleSubmit,
        register,
        formState: {errors},
    } = useForm();

    const submitHandler = ({email, password}) => {
        }
  return (
    <Layout title='Login'>
        <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
            <h1 className='mb-4 text-xl'>Login</h1>
            <div className='mb-4'>
                <label htmlFor='email'>Email</label>
                <input type='email'
                {...register('email', {required: 'Please enter email', 
                pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: 'Please enter valid email address'
                } 
                })}
                 className='w-full' id='email' autoFocus></input>
                 {errors.email && (<div className='text-red-500'>{errors.email.message}</div>)}
            </div>
            <div className='mb-4'>
                <label htmlFor='password'>Password</label>
                <input type='password'
                 {...register('password', {
                    required: 'Please enter password',
                    minLength: {value: 6, message: 'password must be more than 5 characters'}
                 })}
                 className='w-full' id='password' autoFocus></input>
                 {errors.password && (<div className='text-red-500'>{errors.password.message}</div>)}
            </div>
            <div className='mb-4'>
                <button className='primary-button'>Login</button>
            </div>
            <div className='mb-4'>
                {`Don't have an account?`}<Link href='/register'> Register</Link>
            </div>
        </form>
    </Layout>
  )
}
