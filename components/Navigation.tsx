"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type navLink = {
  href: string;
  label: string;
};

type Props = {
  navItems: navLink[];
};

const Navigation = ({ navItems }: Props) => {
  const pathName = usePathname();
  
  return (
    <>
      {navItems.map((link) => {
        const isActive = pathName === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? "active" : ""}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
};

export { Navigation };
