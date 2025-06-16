"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <div className={cn("flex items-center gap-2", className)}>
        <Image
          src="/favicon.ico"
          alt="logo"
          width={50}
          height={50}
          className="w-8 h-8 object-contain md:w-10 md:h-10"
        />
        <h1 className="text-2xl font-bold text-[var(--second)] md:text-2xl">
          Shopfluence
        </h1>
      </div>
    </Link>
  );
};

export default Logo;