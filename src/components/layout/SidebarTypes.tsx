import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  ITEM_TYPE_TEXT_COLORS,
  getItemTypeHref,
} from "@/lib/constants/item-types";
import { ItemTypeIcon } from "@/components/shared/ItemTypeIcon";
import type { MockItemType } from "@/lib/mock-data";

interface SidebarTypesProps {
  types: MockItemType[];
}

export function SidebarTypes({ types }: SidebarTypesProps) {
  return (
    <Collapsible defaultOpen render={<SidebarGroup />}>
      <SidebarGroupLabel
        className="group/trigger gap-1 hover:text-sidebar-foreground"
        render={<CollapsibleTrigger />}
      >
        Types
        <ChevronDown className="-rotate-90 transition-transform group-data-[panel-open]/trigger:rotate-0" />
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent>
          <SidebarMenu>
            {types.map((type) => (
              <SidebarMenuItem key={type.id}>
                <SidebarMenuButton
                  tooltip={type.label}
                  render={<Link href={getItemTypeHref(type.name)} />}
                >
                  <ItemTypeIcon
                    icon={type.icon}
                    className={ITEM_TYPE_TEXT_COLORS[type.name]}
                  />
                  <span>{type.label}</span>
                </SidebarMenuButton>
                <SidebarMenuBadge className="text-muted-foreground">
                  {type.itemCount}
                </SidebarMenuBadge>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  );
}
