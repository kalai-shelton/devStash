import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ITEM_TYPE_BORDER_COLORS,
  ITEM_TYPE_TEXT_COLORS,
} from "@/lib/constants/item-types";
import { ItemTypeIcon } from "@/components/shared/ItemTypeIcon";
import { getItemTypeById } from "@/lib/dashboard";
import type { MockCollection, MockItemType } from "@/lib/mock-data";

interface CollectionCardProps {
  collection: MockCollection;
  types: MockItemType[];
}

export function CollectionCard({ collection, types }: CollectionCardProps) {
  const collectionTypes = collection.itemTypeIds
    .map((typeId) => getItemTypeById(types, typeId))
    .filter((type): type is MockItemType => type !== undefined);
  const primaryType = collectionTypes[0];

  return (
    <Link
      href={`/collections/${collection.id}`}
      className={cn(
        "flex flex-col gap-1 rounded-xl border border-l-4 bg-card p-5 transition-colors duration-150 hover:bg-accent/50",
        primaryType && ITEM_TYPE_BORDER_COLORS[primaryType.name]
      )}
    >
      <div className="flex items-center gap-2">
        <h3 className="truncate font-medium">{collection.name}</h3>
        {collection.isFavorite && (
          <Star
            className="size-4 shrink-0 fill-yellow-400 text-yellow-400"
            aria-label="Favorite"
          />
        )}
      </div>
      <p className="text-sm text-muted-foreground">
        {collection.itemCount} items
      </p>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
        {collection.description}
      </p>
      <div className="mt-3 flex gap-2">
        {collectionTypes.map((type) => (
          <ItemTypeIcon
            key={type.id}
            icon={type.icon}
            className={cn("size-4", ITEM_TYPE_TEXT_COLORS[type.name])}
            aria-label={type.label}
          />
        ))}
      </div>
    </Link>
  );
}
