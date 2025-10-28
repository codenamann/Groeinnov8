import { useEffect, useState } from 'react'
import { useAdminAuth } from '../context/AuthContext'
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { fetchEmails } from '../lib/api'
import { EmailLayout } from '../components/EmailLayout'
import { Inbox } from "lucide-react"
import { SettingsLayout } from '../components/Setting'
import { useIsMobile } from "@/hooks/use-mobile"
import AllEmails from '../components/AllEmails'

const AdminDashboard = () => {
  const [selected, setSelected] = useState('Inbox');
  const [selectedMail, setSelectedMail] = useState(null)
  const { token } = useAdminAuth();
  const [emails, setEmails] = useState(null);
  const isMobile = useIsMobile();

  const onInboxClick = () => {
    setSelected('Inbox');
  }

  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
        isActive: true,
        onClick: onInboxClick
      },
    ],
  }

  useEffect(()=> {
    if (token){
          fetchEmails(token)
          .then((emails)=>{setEmails(emails);})
          .catch((err => console.error('Failed to fetch emails', err)));
      }
    }, [token])

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        }
      }
    >
      <AppSidebar data={data} setSelected={setSelected} selectedEmail={setSelectedMail} emails={emails} />
      <SidebarInset>
        <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <span className='font-medium text-xl w-1/2'>{selected}</span>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {selected === "Settings" && <SettingsLayout setEmails={setEmails} />}
          {selected === "Email" && 
            <EmailLayout
              setEmails={setEmails} 
              selected={selectedMail}
              token={token} 
              setSelected={setSelectedMail} 
            />}
          {isMobile && selected === "Inbox" && <AllEmails emails={emails} selectedEmail={setSelectedMail} setSelected={setSelected}/>}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AdminDashboard