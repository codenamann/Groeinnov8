import React, { useEffect, useState } from 'react'
import CardLayout from '../components/CardLayout'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import SubmitButton from '../components/SubmitButton'
import { Link, useNavigate } from 'react-router-dom'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { adminLogin } from '../lib/api'
import { useAdminAuth } from '../context/AuthContext'

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters')
})

const AdminLoginPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const {admin, login, isAuthenticated} = useAdminAuth();
  const navigate = useNavigate();

  const {
      register, 
      handleSubmit, 
      formState: { errors }
  } = useForm({
      resolver: zodResolver(loginSchema)
  })

  const onSubmit = async(data) => {
      setIsSubmitting(true);
      setSubmitMessage('');

      try{
        const result = await adminLogin(data);
        console.log('Login successful:', result);
        const admin = JSON.parse(atob(result.token.split('.')[1]));
        console.log('Decoded token:', admin);
        login( admin, result.token);
        setSubmitMessage('Login successful. Redirecting...');
      }catch(err){
        setSubmitMessage(err.response?.data?.message || 'Login failed. Please try again.')
      }finally{
        setIsSubmitting(false);
      }
  }

  useEffect(() => {
    if(isAuthenticated()){
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated()]);

  return (
    <CardLayout
      title="Admin Login" 
      description="Sign in to your admin account" 
      maxWidth='max-w-md'
      >
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(onSubmit)(e);}} className='space-y-4'>
            <TextInput
              label='Email' 
              placeholder='Enter your email' 
              id='email'
              type='email' 
              error ={errors.email?.message}
              required
              {...register('email')}
            />
            <PasswordInput
              label='Password'
              placeholder='Enter your password'
              required
              error = {errors.password?.message}
              {...register('password')}
            />

            <SubmitButton
              loading={isSubmitting}
              loadingText='Signing in...'
            >
              Sign In
            </SubmitButton>

            {submitMessage && (
              <div className='text-center text-sm p-3 rounded-md bg-red-600/5 text-red-600 border border-red-500'>
                {submitMessage}
              </div>
            )}

            <div className='mt-6 text-center space-y-4'>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or</span>
                </div>
              </div>

              <div className='space-y-2'>
                <p className='text-sm text-muted-foreground'>
                  Don't have an admin account?{' '}
                  <Link 
                    to='/admin/signup' 
                    className='text-primary hover:underline font-medium'
                  >
                    Create Account
                  </Link>
                </p>
                <p className='text-sm text-muted-foreground'>
                  <Link to='/' className='text-primary hover:underline font-medium'>
                    ← Back to Contact Form
                  </Link>
                </p>
              </div>
            </div>
        </form>
    </CardLayout>
  )
}

export default AdminLoginPage