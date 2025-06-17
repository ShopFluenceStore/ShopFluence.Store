"use client";
import { Heart } from "lucide-react";
import React from "react";
import Link from "next/link";
import { useFavoriteStore } from "@/lib/store";

const FavoriteButton = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const totalFavorites = favorites.length;

  return (
    <Link href={"/favorites"} className="group relative">
      <Heart />
      {totalFavorites > 0 && (
        <span
          className="absolute -top-2 -right-2 z-10 text-xs inline-flex text-[var(--white)] bg-[var(--warn)] items-center justify-center px-1 min-w-[18px] h-[18px]
          rounded-full transition-all ease-in-out duration-300"
        >
          {totalFavorites > 99 ? '99+' : totalFavorites}
        </span>
      )}
    </Link>
  );
};

export default FavoriteButton;