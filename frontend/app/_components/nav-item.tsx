import { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  label: string;
  icon: LucideIcon;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
};

const NavItem: FC<Props> = ({ label, icon, isActive, onClick, href }) => {
  const Icon = icon;
  return (
    <Link
      href={href}
      className={`flex cursor-pointer items-center gap-3 rounded px-4 py-2 text-gray-600 ${isActive ? "text-primary" : "hover:text-primary"}`}
      onClick={onClick}
    >
      <Icon className="size-5" />
      <span className="font-bold">{label}</span>
    </Link>
  );
};

export default NavItem;
