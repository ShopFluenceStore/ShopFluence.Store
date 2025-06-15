"use client";
import React, { useState } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  className?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = "", onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch?.("");
  };

  return (
    <form
      className={`relative ${className}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-2 border-3 border-[var(--main)] rounded-md leading-5 bg-white placeholder-[var(--sub-text)] focus:outline-none focus:ring-1 focus:ring-[var(--main)] focus:border-[var(--main)] sm:text-sm"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => {}}
          onBlur={() => {}}
          aria-label="Search products"
        />
        {query && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-44 pr-3 flex items-center text-[var(--sub-text)] hover:text-[var(--text)] transition-colors cursor-pointer"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center transition-colors cursor-pointer"
        >
          <h1 className="text-[var(--white)] bg-[var(--main)] rounded-r-md py-2 px-4 text-sm font-semibold">
            Search
          </h1>
        </button> 
        {/* <select
          name="category"
          id="category"
          className="absolute inset-y-0 right-20 pr-3 border-l-2 border-[var(--main)] flex items-center text-[var(--text)] focus:outline-none sm:text-sm transition-colors cursor-pointer"
        >
          <option value="all">All</option>
          <option value="products">Products</option>
          <option value="categories">Categories</option>
        </select> */}
      </div>
    </form>
  );
};

export default SearchBar;
