
import {
  Card,
  CardContent,
 

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EmptyState from "./emptyState";
import { Note } from "@/lib/types";
import { formatDate } from "@/lib/storage";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface NotesSidebarProps {
  notes:Note[];
  onSelectNote: (note:Note) => void;
  createNewNote: () => void;
  onDeleteNote:(id:string) => void;
  activeNoteId?:string;
}

export default function NotesSidebar({notes, onSelectNote, createNewNote,onDeleteNote,activeNoteId}: NotesSidebarProps) {

  return (
   <Card className="h-full">
  <CardHeader>
    <CardTitle>My Notes</CardTitle>
    
  </CardHeader>
  <CardContent>
   {notes.length === 0 ? (
    <EmptyState message="No Notes" buttonText="Create" onButtonClick={createNewNote}/>
   ): (
    <ScrollArea className="h-[calc(100vh-150px)]">
         <div className="flex flex-col gap-4">
    {notes.map(note => (
      <div key={note.id} onClick={() => onSelectNote(note)} className={`p-3 rounded-md cursor-pointer hover:bg-accent transition-colors  ${
      activeNoteId === note.id ? "bg-accent": ""}`}>
       <div className="flex justify-between items-center">
        <div>
          <h3 className="font-semibold">
            {note.title.substring(0,30)}
            {note.title.length > 30 ? "...": ""}
          </h3>
          <p className="text-sm text-muted-foreground">
            {note.content.substring(0,40)}
            {note.content.length > 40 ? "...": ""}
          </p>
          <p className="text-sm text-muted-foreground">
            {formatDate(note.createdAt)}
          </p>
        </div>
        <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-destructive cursor-pointer"
       onClick={(e) => {
        e.stopPropagation();
        onDeleteNote(note.id);
       }}
        >
          <Trash2 className="h-4 w-4" />
        </Button>

       </div>
      </div>
    ))}
   </div>
    </ScrollArea>

   )} 
  </CardContent>

</Card>

  )
}

