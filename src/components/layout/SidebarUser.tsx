import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { MockUser } from "@/lib/mock-data";

interface SidebarUserProps {
  user: MockUser;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function SidebarUser({ user }: SidebarUserProps) {
  return (
    <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
      <Avatar>
        {user.image && <AvatarImage src={user.image} alt={user.name} />}
        <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
        <p className="truncate text-sm font-medium">{user.name}</p>
        <p className="truncate text-xs text-muted-foreground">{user.email}</p>
      </div>
      <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Settings"
        className="text-muted-foreground group-data-[collapsible=icon]:hidden"
      >
        <Settings />
      </Button>
    </div>
  );
}
