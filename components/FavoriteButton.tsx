import { Heart } from "lucide-react";
import React from "react";
import Link from "next/link";

const FavoriteButton = () => {
  return (
    <Link href={"/favorite"} className="group relative">
      <Heart />
      <span
        className="absolute -top-2 -right-2 z-10 text-xs inline-flex text-[var(--white)] bg-[var(--warn)] items-center justify-center px-1
        rounded-full transition-all ease-in-out duration-300"
      >
        0
      </span>
    </Link>
  )
}

export default FavoriteButton