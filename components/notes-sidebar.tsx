
import {
  Card,
  CardContent,
 

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EmptyState from "./emptyState";
import { Note } from "@/lib/types";

interface NotesSidebarProps {
  notes:Note[]
}

export default function NotesSidebar({notes}: NotesSidebarProps) {

  return (
   <Card>
  <CardHeader>
    <CardTitle>My Notes</CardTitle>
    
  </CardHeader>
  <CardContent>
   {notes.length === 0 ? (
    <EmptyState message="No Notes" buttonText="Create"/>
   ): (
   <div>
    {notes.map(note => (
      <div key={note.id} className="p-3 rounded-md cursor-pointer hover:bg-accent transition-colors">
       <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">
            {note.title.substring(0,30)}
            {note.title.length > 30 ? "...": ""}
          </h3>
          <p className="text-sm text-muted-foreground">
            {note.content.substring(0,40)}
            {note.content.length > 40 ? "...": ""}
          </p>
          <p>
            
          </p>
        </div>

       </div>
      </div>
    ))}
   </div>
   )} 
  </CardContent>

</Card>

  )
}

