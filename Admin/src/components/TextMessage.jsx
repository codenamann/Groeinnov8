import React, { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea';

const TextMessage = forwardRef(({
    label,
    className,
    error,
    id,
    required= false,
    ...props
}, ref) => {
    const inputId = id || useId();

  return (
    <div className={cn("space-y-2", className)}>
        {label && (<Label htmlFor={inputId} className="text-sm font-medium" >
            {label}
            {required && <span className='text-destructive ml-1'>*</span>}
        </Label>)}
        
        <Textarea
          ref={ref}
          id= {inputId}
          className= {cn('mt-2', 
            error && 'border-destructive focus-visible:ring-destructive'
          )}
          {...props}
        />
        {error && (
          <p className='text-sm text-destructive'>{error}</p>
        )}
    </div>
  )
});

TextMessage.displayName = 'TextMessage';

export default TextMessage