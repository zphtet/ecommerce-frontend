"use client";
import Link from "next/link";

const Navlink = ({ href, label }: { href: string; label: string }) => {
  return <Link href={href}>{label}</Link>;
};

export default Navlink;
