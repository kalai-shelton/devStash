import { File, type LucideProps } from "lucide-react";
import { ITEM_TYPE_ICONS } from "@/lib/constants/item-types";

interface ItemTypeIconProps extends LucideProps {
  icon: string;
}

export function ItemTypeIcon({ icon, ...props }: ItemTypeIconProps) {
  const Icon = ITEM_TYPE_ICONS[icon] ?? File;
  return <Icon {...props} />;
}
