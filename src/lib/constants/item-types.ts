import {
  Code,
  File,
  Image,
  Link,
  Sparkles,
  StickyNote,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export const ITEM_TYPE_ICONS: Record<string, LucideIcon> = {
  Code,
  Sparkles,
  Terminal,
  StickyNote,
  File,
  Image,
  Link,
};

export const ITEM_TYPE_TEXT_COLORS: Record<string, string> = {
  snippet: "text-snippet",
  prompt: "text-prompt",
  command: "text-command",
  note: "text-note",
  file: "text-file",
  image: "text-image",
  link: "text-link",
};

export const ITEM_TYPE_BORDER_COLORS: Record<string, string> = {
  snippet: "border-l-snippet",
  prompt: "border-l-prompt",
  command: "border-l-command",
  note: "border-l-note",
  file: "border-l-file",
  image: "border-l-image",
  link: "border-l-link",
};

export const ITEM_TYPE_BG_COLORS: Record<string, string> = {
  snippet: "bg-snippet/10",
  prompt: "bg-prompt/10",
  command: "bg-command/10",
  note: "bg-note/10",
  file: "bg-file/10",
  image: "bg-image/10",
  link: "bg-link/10",
};

export function getItemTypeHref(typeName: string): string {
  return `/items/${typeName}s`;
}
