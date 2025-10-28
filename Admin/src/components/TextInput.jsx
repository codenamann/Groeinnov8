import {forwardRef, useId} from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { cn } from '../lib/utils';

const TextInput = forwardRef(({
    label,
    className,
    error,
    id,
    required = false,
    ...props
}, ref) => {
    const inputId = id || useId();


  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <Label htmlFor={inputId} className="text-sm font-medium ">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
      )}
      <Input
        ref={ref}
        id={inputId}
        className={cn('mt-2',
          error && "border-destructive focus-visible:ring-destructive"
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
})

TextInput.displayName = "TextInput"

export default TextInput