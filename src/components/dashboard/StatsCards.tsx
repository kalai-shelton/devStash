import { FolderOpen, Layers, Star, type LucideIcon } from "lucide-react";
import type { DashboardStats } from "@/lib/dashboard";

interface StatsCardsProps {
  stats: DashboardStats;
}

interface StatCard {
  label: string;
  value: number;
  icon: LucideIcon;
}

export function StatsCards({ stats }: StatsCardsProps) {
  const cards: StatCard[] = [
    { label: "Items", value: stats.totalItems, icon: Layers },
    { label: "Collections", value: stats.totalCollections, icon: FolderOpen },
    { label: "Favorite items", value: stats.favoriteItems, icon: Star },
    { label: "Favorite collections", value: stats.favoriteCollections, icon: Star },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {cards.map(({ label, value, icon: Icon }) => (
        <div key={label} className="rounded-xl border bg-card p-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            {label}
            <Icon className="size-4" />
          </div>
          <p className="mt-2 text-2xl font-semibold tabular-nums">{value}</p>
        </div>
      ))}
    </div>
  );
}
