'use client'

import NotesSidebar from "@/components/notes-sidebar";
import HeaderCard from "./header/cardHeader";
import { useState } from "react";
import {type Note } from "@/lib/types";


export default function Note() {
  const [notes,setNotes] = useState<Note[]>([])
  console.log(notes)

  const createNewNote = () => {
    const newNote: Note = {
      id:Date.now().toString(),
      title:"New Note",
      content: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam eligendi ut rerum ex debitis. Molestias sit, aliquam ducimus dolore eum, quam labore id minima explicabo praesentium molestiae non cupiditate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aperiam eligendi ut rerum ex debitis. Molestias sit, aliquam ducimus dolore eum, quam labore id minima explicabo praesentium molestiae non cupiditate!",
      createdAt:Date.now(),
    }
    setNotes([newNote, ...notes])

  }
  return (
   <div className="flex flex-col min-h-screen bg-rose-100">
<HeaderCard onNewNote={createNewNote}/>
    <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className=" md:col-span-1">
        <NotesSidebar notes={notes} />
        </div>
      <div className="bg-teal-50 md:col-span-2">
        right
      </div>
    </main>
   </div>
  );
}
