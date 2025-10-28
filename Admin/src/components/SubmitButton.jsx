import React from 'react'
import { Button } from './ui/button'
import { cn } from '../lib/utils'
import { Loader2 } from 'lucide-react'

const SubmitButton = ({
    children,
    loading = false,
    loadingText="Loading...",
    className,
    disabled,
    ...props
}) => {
  return (
    <Button 
      type='submit'
      className={cn('w-full',className)}
      disabled={loading || disabled}
      {...props}
    >
        {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin'/>}
        {loading ? loadingText : children}
    </Button>
  )
}

export default SubmitButton