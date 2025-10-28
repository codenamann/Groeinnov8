import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import { useEffect } from 'react';
import { useState } from 'react';

const AllEmails = ({emails, selectedEmail, setSelected}) => {
    const [loading, setLoading] = useState(true);
    const [mails, setMails] = useState(emails)
    useEffect(() => {
        if(emails){
            setMails(emails);
            setLoading(false);
        }
    }, [emails])

    if(loading){
        return(
            <div className='rounded-full border-border animate-spin'></div>
        )
    }
  return (
    <ScrollArea className="h-full">
        {mails?.map((mail) => (
            <button
                onClick={() => {selectedEmail(mail); setSelected('Email')}}
                key={mail._id}
                className="flex flex-col w-full items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto text-xs">{mail.sentAt.split('T')[0]}</span>
                </div>
                <span className="font-medium">{mail.subject}</span>
                <span className="line-clamp-2 w-[260px] text-start whitespace-break-spaces text-xs">
                    {mail.message}
                </span>
            </button>
        ))}
    </ScrollArea>
  )
}

export default AllEmails