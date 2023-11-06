import { SideProps } from "@/componentTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MiniSidebar = (lists: SideProps) => {
  return (
    <Link href={lists.path} className="flex items-center justify-between p-3 border-b-[0.3px] border-b-gray-6">
      <span>
        <Image src={lists.icon} alt={lists.title} />
      </span>
      <span>{lists.title}</span>
    </Link>
  );
};

export default MiniSidebar;
