import { Pin, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ITEM_TYPE_BG_COLORS,
  ITEM_TYPE_BORDER_COLORS,
  ITEM_TYPE_TEXT_COLORS,
} from "@/lib/constants/item-types";
import { ItemTypeIcon } from "@/components/shared/ItemTypeIcon";
import type { MockItem, MockItemType } from "@/lib/mock-data";

interface ItemRowProps {
  item: MockItem;
  type: MockItemType | undefined;
}

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function ItemRow({ item, type }: ItemRowProps) {
  const typeName = type?.name ?? "";

  return (
    <div
      className={cn(
        "flex items-start gap-4 rounded-xl border border-l-4 bg-card p-4 transition-colors duration-150 hover:bg-accent/50",
        ITEM_TYPE_BORDER_COLORS[typeName]
      )}
    >
      <div
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-lg",
          ITEM_TYPE_BG_COLORS[typeName]
        )}
      >
        <ItemTypeIcon
          icon={type?.icon ?? "File"}
          className={cn("size-5", ITEM_TYPE_TEXT_COLORS[typeName])}
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate font-medium">{item.title}</h3>
          {item.isPinned && (
            <Pin
              className="size-3.5 shrink-0 text-muted-foreground"
              aria-label="Pinned"
            />
          )}
          {item.isFavorite && (
            <Star
              className="size-3.5 shrink-0 fill-yellow-400 text-yellow-400"
              aria-label="Favorite"
            />
          )}
        </div>
        <p className="mt-0.5 truncate text-sm text-muted-foreground">
          {item.description}
        </p>
        {item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <time
        dateTime={item.createdAt}
        className="shrink-0 text-xs text-muted-foreground"
      >
        {DATE_FORMAT.format(new Date(item.createdAt))}
      </time>
    </div>
  );
}
