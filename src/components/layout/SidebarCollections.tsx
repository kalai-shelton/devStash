import Link from "next/link";
import { ChevronDown, Folder, Star } from "lucide-react";
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
import type { MockCollection, MockItem } from "@/lib/mock-data";

interface SidebarCollectionsProps {
  collections: MockCollection[];
  items: MockItem[];
}

interface CollectionListProps {
  title: string;
  collections: MockCollection[];
  showFavoriteStar?: boolean;
}

function getLastActivity(collectionId: string, items: MockItem[]): number {
  return items
    .filter((item) => item.collectionIds.includes(collectionId))
    .reduce((latest, item) => Math.max(latest, Date.parse(item.updatedAt)), 0);
}

function CollectionList({
  title,
  collections,
  showFavoriteStar = false,
}: CollectionListProps) {
  if (collections.length === 0) return null;

  return (
    <div className="mt-2 first:mt-0">
      <p className="px-2 py-1 text-[0.65rem] font-medium tracking-wider text-muted-foreground uppercase">
        {title}
      </p>
      <SidebarMenu>
        {collections.map((collection) => (
          <SidebarMenuItem key={collection.id}>
            <SidebarMenuButton
              render={<Link href={`/collections/${collection.id}`} />}
            >
              <Folder className="text-muted-foreground" />
              <span>{collection.name}</span>
            </SidebarMenuButton>
            <SidebarMenuBadge className="text-muted-foreground">
              {showFavoriteStar ? (
                <Star
                  className="size-3.5 fill-yellow-400 text-yellow-400"
                  aria-label="Favorite"
                />
              ) : (
                collection.itemCount
              )}
            </SidebarMenuBadge>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </div>
  );
}

export function SidebarCollections({
  collections,
  items,
}: SidebarCollectionsProps) {
  const favorites = collections.filter((collection) => collection.isFavorite);
  const recent = collections
    .filter((collection) => !collection.isFavorite)
    .sort(
      (a, b) => getLastActivity(b.id, items) - getLastActivity(a.id, items)
    );

  return (
    <Collapsible
      defaultOpen
      render={<SidebarGroup className="group-data-[collapsible=icon]:hidden" />}
    >
      <SidebarGroupLabel
        className="group/trigger gap-1 hover:text-sidebar-foreground"
        render={<CollapsibleTrigger />}
      >
        Collections
        <ChevronDown className="-rotate-90 transition-transform group-data-[panel-open]/trigger:rotate-0" />
      </SidebarGroupLabel>
      <CollapsibleContent>
        <SidebarGroupContent>
          <CollectionList title="Favorites" collections={favorites} showFavoriteStar />
          <CollectionList title="Recent" collections={recent} />
        </SidebarGroupContent>
      </CollapsibleContent>
    </Collapsible>
  );
}
