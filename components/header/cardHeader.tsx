import React from 'react'
import { Button } from '../ui/button'
import { PlusIcon } from 'lucide-react'

interface HeaderProps {
  onNewNote: () => void;
}

export default function HeaderCard({onNewNote}: HeaderProps) {
  return (
  <header className='border-b p-4 bg-card'>
    <div className='container mx-auto flex justify-between items-center'>
<h1 className='text-2xl font-bold '>
    Notes

</h1>
<Button onClick={onNewNote} size="sm" className='cursor-pointer'>
    <PlusIcon className='h-4 w-4' />
    New Note
</Button>
    </div>

  </header>
  )
}


