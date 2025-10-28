import React, { forwardRef, useId, useState } from 'react'
import { Button } from './ui/button';
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '../lib/utils';
import { Label } from './ui/label';
import { Input } from './ui/input';

const PasswordInput = forwardRef(({
  label, 
  error, 
  className, 
  id,
  required = false,
  ...props 
},ref) => {
    let [showPassword, setShowPassword] = useState(false);
    const inputId = id || useId();
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={inputId} className="text-sm font-medium ">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <div className='relative'>
        <Input
            ref={ref}
            id={inputId}
            type={showPassword ?'text':'password'}
            className={cn('mt-2',
            error && "border-destructive focus-visible:ring-destructive"
            )}
            {...props}
        />
        <Button
            type='button'
            variant='ghost'
            size='sm'
            className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
            onClick={()=>{setShowPassword(!showPassword)}}
        >
            {showPassword?
                <EyeOff />
                : <Eye />
            }
        </Button>
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
})

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput