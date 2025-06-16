import { ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";

const Carticon = () => {
  return (
    <Link href={"/cart"} className="group relative">
      <ShoppingCart />
      <span
        className="absolute -top-2 -right-2 z-10 text-xs inline-flex text-[var(--white)] bg-[var(--warn)] items-center justify-center px-1
        rounded-full transition-all ease-in-out duration-300"
      >
        0
      </span>
    </Link>
  );
};

export default Carticon;
