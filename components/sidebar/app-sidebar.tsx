"use client"

import * as React from "react"
import {

  IconChartBar,
  IconDashboard,

  IconFolder,


  IconListDetails,



} from "@tabler/icons-react"


import { NavMain } from "@/components/sidebar/nav-main"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Notebook } from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "All Notes",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Favourites",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Archived",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Recently Deleted",
      url: "#",
      icon: IconFolder,
    },
  
  ],


}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Notebook />
                <span className="text-base font-semibold">Quick Note.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />

    
      </SidebarContent>
      <SidebarFooter>

      </SidebarFooter>
    </Sidebar>
  )
}
