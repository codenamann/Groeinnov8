import React from 'react'
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from "@/components/ui/card"
import { cn } from '../lib/utils'

const CardLayout = ({
    children, 
    title, 
    description,
    className,
    contentClassName,
    maxWidth = "max-w-md",
    ...props
}) => {
  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
        <Card className={cn("w-full", maxWidth, className)} {...props}>
        {(title || description) && (
          <CardHeader className="text-center gap-0">
            {title && <CardTitle className="text-2xl font-bold">{title}</CardTitle>}
            {description && <CardDescription className="text-muted-foreground">{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent className={cn("space-y-4", contentClassName)}>
          {children}
        </CardContent>
      </Card>
    </div>
  )
}

export default CardLayout