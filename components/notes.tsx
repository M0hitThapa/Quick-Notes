'use client'

import NotesSidebar from "@/components/notes-sidebar";
import HeaderCard from "./header/cardHeader";
import { useState } from "react";


export default function Note() {
  const [notes,setNotes] = useState<Note[]>([])

  const createNewNote = () => {}
  return (
   <div className="flex flex-col min-h-screen bg-rose-100">
<HeaderCard onNewNote={createNewNote}/>
    <main className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className=" md:col-span-1">
        <NotesSidebar />
        </div>
      <div className="bg-teal-50 md:col-span-2">
        right
      </div>
    </main>
   </div>
  );
}
