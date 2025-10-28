import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Separator } from "./ui/separator"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Reply, Trash2 } from "lucide-react"
import { deleteMail } from "../lib/api"

export function EmailLayout({ selected, token, setEmails, setSelected }) {
  if (!selected) {
    return (
      <div className="flex h-full items-center justify-center text-muted-foreground">
        Select an email to view
      </div>
    )
  }

  const deleteEmailFromDom = (id) => {
    setEmails((prevEmail) => prevEmail.filter(email => email._id != id));
  }

  const handleReply = () => {
    window.location.href = `mailto:${selected.from}?subject=Re: ${encodeURIComponent(
      selected.subject
    )}`
  }
  const handleDelete = async (id) => {
    const response = await deleteMail(token, id);
    if(response.success){
      deleteEmailFromDom(id);
      setSelected(null);
    }
    console.log(response);
  }

  return (
    <Card className="h-full w-full flex flex-col shadow-none border-0 rounded-none">
      <CardHeader className="flex flex-row items-start justify-between gap-2 px-1 md:px-6">
        <div>
          <CardTitle className="text-xl font-semibold">{selected.name}</CardTitle>
          <div className="text-sm text-muted-foreground mt-1">
            From: <span className="font-medium">{selected.from}</span> •{" "}
            <span>{selected.sentAt.split("T")[0]}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReply}
            className="flex items-center gap-2"
          >
            <Reply className="h-4 w-4" />
            Reply
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {handleDelete(selected._id)}}
            className="flex items-center gap-2"
          >
            <Trash2 />
          </Button>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="flex-1 px-2 md:px-6">
        <ScrollArea className="h-full">
          <p className="whitespace-pre-wrap font-bold text-md text-foreground mb-4">
            Subject : <span className="font-medium">{selected.subject}</span>
          </p>
          <p className="whitespace-pre-wrap leading-relaxed text-sm text-foreground">
            {selected.message}
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
