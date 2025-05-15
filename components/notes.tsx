'use client'

import NotesSidebar from "@/components/notes-sidebar";

import {  useState } from "react";
import {Note } from "@/lib/types";
import NoteView from "./noteView";
import NoteEditor from "./noteEditor";
import { SiteHeader } from "./sidebar/site-header";
import EmptyState from "./emptyState";


export default function NotePage() {
  const [notes,setNotes] = useState<Note[]>([])
  const [activeNote, setActiveNote] = useState<Note | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  console.log(notes)



  const createNewNote = () => {
    const newNote: Note = {
      id:Date.now().toString(),
      title:"New Note",
      content: "",
      createdAt:Date.now(),
    }
    setNotes([newNote, ...notes]);
    setActiveNote(newNote);
    setIsEditing(true);

  }
  const selectNote = (note:Note) => {
    setActiveNote(note);
    setIsEditing(false)
  }  

  const cancelEdit= () => {
setIsEditing(false);
  }
  const saveNote = (updatedNote:Note) => {
setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)))
setActiveNote(updatedNote)
setIsEditing(false);  
}
const deleteNote = (id:string) => {
setNotes(notes.filter(note => note.id !== id))
if(activeNote && activeNote.id === id) {
  setActiveNote(null);
  setIsEditing(false)
}
}

  const renderNoteContent = () => {
    if(!activeNote && notes.length === 0) {
      return (
        <EmptyState message="Create Your First note to get started" buttonText="new Note" onButtonClick={createNewNote} />

      )
    }




    if(activeNote && isEditing) {
      return <NoteEditor note={activeNote} onSave={saveNote} onCancel={cancelEdit} />
    }
    if (activeNote) {
      return <NoteView note={activeNote} onEdit={() => setIsEditing(true)}/>
    }
    return null;
  }
  return (
   <div className="flex flex-col min-h-screen bg-rose-100">
<SiteHeader onNewNote={createNewNote}/>
    <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
      <div className=" md:col-span-1">
        <NotesSidebar createNewNote={createNewNote} notes={notes}  onSelectNote={selectNote} onDeleteNote={deleteNote}/>
        </div>
      <div className=" md:col-span-2">
        {renderNoteContent()}
      </div>
    </main>
   </div>
  );
}
