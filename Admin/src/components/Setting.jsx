import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { deleteAllMails, getSettings, onToggleNotifications } from "../lib/api"
import { useAdminAuth } from "../context/AuthContext"

export function SettingsLayout({ }) {
  const [newPassword, setNewPassword] = useState("")
  const [settings, setSettings] = useState('');
  const {token} = useAdminAuth();

  useState(async ()=>{
    try{
      const fetched = await getSettings(token);
      setSettings(fetched[0]);
    }catch(err){
      console.log(err);
    }
  }, [])

  const handlePasswordUpdate = () => {
    if (newPassword.trim() !== "") {
      onUpdatePassword(newPassword)
      setNewPassword("")
    }
  }

  const handleForwardEmailUpdate = () => {
    if (forwardEmail.trim() !== "") {
      onUpdateEmail(forwardEmail)
    }
  }

  const handleToggleNotifications = () => {
    const newValue = !settings.Notification;
    setSettings((old)=> {return {...old,Notification:newValue }});
    onToggleNotifications(token, newValue)
  }

  const handleDeleteAll = () => {
    if (confirm("Are you sure you want to delete all submissions? This action cannot be undone.")) {
      deleteAllMails(token);
      setEmails(null);
    }
  }

  return (
    <Card className="h-full w-full flex flex-col shadow-none border-0 rounded-none">

      <CardContent className="flex-1 p-6 overflow-y-auto space-y-10">
        {/* 1. Change Password */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Change Password</h2>
          <div className="grid gap-2">
            <Label htmlFor="password">New Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <Button onClick={handlePasswordUpdate}>Update Password</Button>
        </div>

        <Separator />

        {/* 2. Email Forwarding + Notifications */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium">Email Settings</h2>
          <div className="grid gap-2">
            <Label htmlFor="forwardEmail">Forward Submissions To</Label>
            <Input
              id="forwardEmail"
              type="email"
              placeholder={settings?.toEmail}
              value={settings?.toEmail}
              onChange={(e) => setSettings((old)=> {return {...old, toEmail: e.target.value};})}
            />
          </div>
          <Button onClick={handleForwardEmailUpdate}>Update Email</Button>

          <div className="flex items-center justify-between mt-4">
            <Label htmlFor="notifications">Email Notifications</Label>
            <Switch
              id="notifications"
              checked={settings?.Notification}
              onCheckedChange={handleToggleNotifications}
            />
          </div>
        </div>

        <Separator />

        {/* 3. Danger Zone */}
        <div className="space-y-4">
          <h2 className="text-lg font-medium text-destructive">Danger Zone</h2>
          <Button variant="destructive" onClick={handleDeleteAll}>
            Delete All Submissions
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
