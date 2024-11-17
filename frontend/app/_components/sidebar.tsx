import { HomeIcon, LucideIcon } from "lucide-react";
import NavItem from "./nav-item";
import { FC } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon;
};
const navItemsData: NavItem[] = [
  {
    id: "1",
    label: "Home",
    href: "/",
    icon: HomeIcon,
  },
];

type Props = {
  className?: string;
};

export const Sidebar: FC<Props> = ({ className }) => {
  return (
    <div className={cn(`flex w-80 flex-col gap-4`, className)}>
      {navItemsData.map(({ id, label, href, icon }) => (
        <NavItem
          key={id}
          label={label}
          href={href}
          icon={icon}
          isActive={true}
        />
      ))}
    </div>
  );
};
