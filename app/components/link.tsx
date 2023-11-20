"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navlink = ({ href, label }: { href: string; label: string }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`${active && "opacity-80"}`}>
      {label}
    </Link>
  );
};

export default Navlink;
