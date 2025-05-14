
import {
  Card,
  CardContent,
 

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EmptyState from "./emptyState";

export default function NotesSidebar() {
    const notes = [];
  return (
   <Card>
  <CardHeader>
    <CardTitle>My Notes</CardTitle>
    
  </CardHeader>
  <CardContent>
   {notes.length === 0 ? (
    <EmptyState message="No Notes" buttonText="Create"/>
   ): (
    <h1>List of the notes</h1>
   )} 
  </CardContent>

</Card>

  )
}

