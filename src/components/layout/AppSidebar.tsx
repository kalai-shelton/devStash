import Link from "next/link";
import { Layers } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { SidebarCollections } from "@/components/layout/SidebarCollections";
import { SidebarTypes } from "@/components/layout/SidebarTypes";
import { SidebarUser } from "@/components/layout/SidebarUser";
import { collections, currentUser, itemTypes, items } from "@/lib/mock-data";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="h-14 justify-center border-b">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-lg font-semibold"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-violet-600 text-white">
            <Layers className="size-4" />
          </span>
          <span className="group-data-[collapsible=icon]:hidden">DevStash</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarTypes types={itemTypes} />
        <SidebarSeparator className="mx-0 group-data-[collapsible=icon]:hidden" />
        <SidebarCollections collections={collections} items={items} />
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarUser user={currentUser} />
      </SidebarFooter>
    </Sidebar>
  );
}
