import Link from "next/link";
import { Clock, Pin } from "lucide-react";
import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { ItemRow } from "@/components/dashboard/ItemRow";
import { StatsCards } from "@/components/dashboard/StatsCards";
import {
  getDashboardStats,
  getItemTypeById,
  getPinnedItems,
  getRecentItems,
  sortCollectionsByRecent,
} from "@/lib/dashboard";
import { collections, itemTypes, items } from "@/lib/mock-data";

export default function DashboardPage() {
  const stats = getDashboardStats(itemTypes, collections, items);
  const recentCollections = sortCollectionsByRecent(collections, items);
  const pinnedItems = getPinnedItems(items);
  const recentItems = getRecentItems(items, 10);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10">
      <div>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">
          Your developer knowledge hub
        </p>
      </div>

      <StatsCards stats={stats} />

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Collections</h2>
          <Link
            href="/collections"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {recentCollections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
              types={itemTypes}
            />
          ))}
        </div>
      </section>

      {pinnedItems.length > 0 && (
        <section>
          <h2 className="mb-4 flex items-center gap-2 font-medium text-muted-foreground">
            <Pin className="size-4" />
            Pinned
          </h2>
          <div className="flex flex-col gap-3">
            {pinnedItems.map((item) => (
              <ItemRow
                key={item.id}
                item={item}
                type={getItemTypeById(itemTypes, item.itemTypeId)}
              />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 flex items-center gap-2 font-medium text-muted-foreground">
          <Clock className="size-4" />
          Recent items
        </h2>
        <div className="flex flex-col gap-3">
          {recentItems.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              type={getItemTypeById(itemTypes, item.itemTypeId)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
