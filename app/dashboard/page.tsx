import { AppSidebar } from "@/components/sidebar/app-sidebar"
import Note from "@/components/notes"


import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"



export default function Dashboard() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
      
        <Note />
      </SidebarInset>
    </SidebarProvider>
  )
}
