import React, { useEffect, useRef, useState } from 'react'
import { cn } from '../lib/utils'
import { Label } from './ui/label'
import { Input } from './ui/input'

const OTPInput = ({
    length = 6,
    label,
    value = '',
    onChange,
    error,
    className,

}) => {
    const inputs = useRef([]);
    useEffect(() => {
        if(inputs.current[0]){
            inputs.current[0].focus();
        }
    }, [])

    const handleChange = (index, digit) => {
        const newValue = value.split('');
        newValue[index] = digit;
        const updatedValue = newValue.join('');
        onChange(updatedValue);

        if(digit && index < length - 1){
            inputs.current[index + 1].focus();
        }
    }

    const handleKeyDown = (index, e) => {
        if(e.key === 'Backspace' && !e.target.value && index > 0){
            inputs.current[index -1 ].focus();
        }
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text/plain');
        const digits = pastedData.replace(/\D/g, '').slice(0, length);
        onChange(digits);

        const nextIndex = Math.min(digits.length, length -1);
        inputs.current[nextIndex]?.focus()
    }

  return (
    <div className={cn('space-y-2', className)}>
        {label && (
            <Label className='text-sm font-medium'>{label}</Label>
        )}
        <div className='flex gap-2 justify-center'>
            {
                Array.from({length},(_, index) =>(
                    <Input 
                      key={index} 
                      type='text'
                      inputMode='numeric'
                      ref={(el) => inputs.current[index] = el}
                      maxLength={1} 
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      value={value[index] || ''}
                      className={cn('w-12 h-12 text-center text-lg font-mono', 
                        error && 'border-destructive focus-visible:ring-destructive'
                      )}  
                    />
                ))
            }
        </div>
        <div>
            {error && (
                <p className='text-sm text-destructive text-center'>{error}</p>
            )}
        </div>
    </div>
  )
}

export default OTPInput