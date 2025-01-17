"use client"

import * as React from "react"
import {
  Church,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Plus,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "./ui/button"

// This is sample data.
const data = {
  user: {
    name: "Charles Almeida",
    email: "charlesalmeida@email.com",
    avatar: "/avatars/shadcn.jpg",
  },
  clients: [
    {
      name: "Flid Marketing",
      logo: GalleryVerticalEnd,
    },
  ],
  navMain: [
    {
      title: "Igreja Adoração Mundial",
      url: "#",
      icon: Church,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.clients} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarSeparator />
        <SidebarContent>
          <Button variant="ghost" size={"sm"}>
            <Plus />
            Adicionar novo quadro
          </Button>
        </SidebarContent>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
