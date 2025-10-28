import React, { useState } from 'react'
import CardLayout from '../components/CardLayout'
import TextInput from '../components/TextInput'
import PasswordInput from '../components/PasswordInput'
import SubmitButton from '../components/SubmitButton'
import { cn } from '../lib/utils'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import OTPInput from '../components/OTPInput'
import { Button } from '../components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { adminSignup, verifyOTP } from '../lib/api'

import z, { email } from 'zod'

const signupSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email address'),
    password: z.string().min(1, 'Password is required').min(6, 'Password must be at least 6 characters'),
    securityKey: z.string().min(1, 'Security Key is required')
})

const AdminSignupPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');
    const [otpValue, setOtpValue] = useState('');
    const [otpError, setOtpError] = useState('');
    const [showOTPStep, setShowOTPStep] = useState(false);
    const [signupData, setSignupData] = useState(null);
    const navigate = useNavigate();

    const {
      register,
      handleSubmit,
      formState: {errors}
    } = useForm({
        resolver: zodResolver(signupSchema)
    });

    const onSignupSubmit = async (data) => {
        setIsSubmitting(true);
        setSubmitMessage('');
        console.log('Entering otp step');
        try{
            const result = await adminSignup(data);
            setSignupData(data);
            setSubmitMessage('OTP sent to your email. Please check and enter the verification code.');
            setShowOTPStep(true);
        }catch(err){
            setSubmitMessage(err.response?.data?.message || 'Signup failed. Please try again.');
        }finally{
            setIsSubmitting(false);
        }
    }

    const onOTPSubmit = async () => {
        setIsSubmitting(true);
        try{
            verifyOTP({email: signupData.email, password: signupData.password, otp: otpValue});
            setSubmitMessage('Account created successfully. You can now log in.');
            setOtpError('');
            setShowOTPStep(false);
            setOtpValue('');
            setSignupData(null);
            setTimeout(navigate('/admin/login'), 3000);
        }catch(err){
            setOtpError(err.message || 'OTP verification failed. Please try again.');
        }finally{
            setIsSubmitting(false);
        }
    }

    const handleBackToSignup = () => {
        setShowOTPStep(false);
        setOtpValue('');
        setSubmitMessage('');
    }

  if(showOTPStep){
    return(
        <CardLayout
            title='Verify Your Email'
            description={`Enter the 6 digit code sent to ${signupData?.email}`}
            maxWidth='max-w-md'
        >
            <div className='space-y-4'>
                <OTPInput 
                  value={otpValue}
                  onChange={setOtpValue}
                />

                <SubmitButton 
                  onClick={onOTPSubmit}
                  loading={isSubmitting}
                  loadingText='Verifying...'
                  disabled={otpValue.length !== 6}
                >
                    Verify & Create Account
                </SubmitButton>

                <div className='text-center'>
                    <Button
                      type='button'
                      variant='ghost'
                      onClick={handleBackToSignup}
                      className='text-sm'
                    >
                        ← Back to Signup
                    </Button>
                </div>
            </div>
        </CardLayout>
    )
  }
  return (
    <CardLayout
        title='Admin Signup'
        description='Register for admin access'
        maxWidth='max-w-md'
    >
        <form onSubmit={handleSubmit(onSignupSubmit)} className='space-y-4'>
            <TextInput 
                label='Email'
                placeholder='Enter your email'
                type='email'
                error= {errors.email?.message}
                required
                {...register('email')}
            />

            <PasswordInput 
                label='Password'
                placeholder='Create a password'
                error= {errors.password?.message}
                {...register('password')}
                required
            />

            <TextInput 
                label='Security Key'
                placeholder='Enter your security key'
                type='text'
                error= {errors.securityKey?.message}
                {...register('securityKey')}
                required
            />

            <SubmitButton
                loading={isSubmitting}
                loadingText='Creating account...'
            >
                Create Account
            </SubmitButton>

            {submitMessage && (
                <div className={cn('text-center text-sm p-3 rounded-md',
                 submitMessage.includes('OTP sent')
                 ?'bg-green-700/10 text-green-700 border border-green-500'
                 :'bg-red-700/10 text-red-700 border border-red-500'
                )}>
                    {submitMessage}
                </div>
            )}

            <div className='mt-6 text-center space-y-4'>
                <div className='relative'>
                    <div className='absolute inset-0 flex items-center'>
                        <span className='w-full border-t border-border'></span>
                    </div>
                    <div className='relative flex justify-center text-xs uppercase'>
                        <span className='bg-card px-2 text-muted-foreground'>Or</span>
                    </div>
                </div>
                <div className='space-y-2'>
                    <p className='text-sm text-muted-foreground'>
                        Already have an account?{' '}
                        <Link to='/admin/login' className='text-primary hover:underline font-medium'>
                            Sign In
                        </Link>
                    </p>
                    <p className='text-sm'>
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

export default AdminSignupPage