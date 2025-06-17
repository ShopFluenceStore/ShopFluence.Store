"use client";
import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useCartStore } from "@/lib/store";

const Carticon = () => {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingCart />
      {totalItems > 0 && (
        <span
          className="absolute -top-2 -right-2 z-10 text-xs inline-flex text-[var(--white)] bg-[var(--warn)] items-center justify-center px-1 min-w-[18px] h-[18px]
          rounded-full transition-all ease-in-out duration-300"
        >
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </Link>
  );
};

export default Carticon;