import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { IconBrandGithub } from "@tabler/icons-react"
import { PlusIcon } from "lucide-react";

interface HeaderProps {
  onNewNote: () => void;
}

export  function SiteHeader({onNewNote}: HeaderProps) {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Notes</h1>
        <div className="ml-auto flex items-center gap-2">
          <Button onClick={onNewNote} size="sm" className='cursor-pointer'>
    <PlusIcon className='h-4 w-4' />
    New Note
</Button>
          <Button variant="secondary" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/M0hitThapa/Quick-Notes"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
            <IconBrandGithub />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
