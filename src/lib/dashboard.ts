import type { MockCollection, MockItem, MockItemType } from "@/lib/mock-data";

export interface DashboardStats {
  totalItems: number;
  totalCollections: number;
  favoriteItems: number;
  favoriteCollections: number;
}

export function getItemTypeById(
  types: MockItemType[],
  typeId: string
): MockItemType | undefined {
  return types.find((type) => type.id === typeId);
}

export function getCollectionLastActivity(
  collectionId: string,
  items: MockItem[]
): number {
  return items
    .filter((item) => item.collectionIds.includes(collectionId))
    .reduce((latest, item) => Math.max(latest, Date.parse(item.updatedAt)), 0);
}

export function sortCollectionsByRecent(
  collections: MockCollection[],
  items: MockItem[]
): MockCollection[] {
  return [...collections].sort(
    (a, b) =>
      getCollectionLastActivity(b.id, items) -
      getCollectionLastActivity(a.id, items)
  );
}

export function getPinnedItems(items: MockItem[]): MockItem[] {
  return items.filter((item) => item.isPinned);
}

export function getRecentItems(items: MockItem[], limit = 10): MockItem[] {
  return [...items]
    .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
    .slice(0, limit);
}

export function getDashboardStats(
  types: MockItemType[],
  collections: MockCollection[],
  items: MockItem[]
): DashboardStats {
  return {
    totalItems: types.reduce((sum, type) => sum + type.itemCount, 0),
    totalCollections: collections.length,
    favoriteItems: items.filter((item) => item.isFavorite).length,
    favoriteCollections: collections.filter((c) => c.isFavorite).length,
  };
}
