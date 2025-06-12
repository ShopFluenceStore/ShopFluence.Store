"use client";
import React, { useState } from "react";
import Container from "./Container";
import { User, MessageCircle, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 relative">
      {/* Desktop Header */}
      <Container className="bg-white flex justify-between items-center py-4 px-4 md:px-12">
        <Logo />
        {/* SearchBar with classes preserved and wider width */}
        <div className="hidden md:block w-full max-w-lg mx-6">
          <SearchBar />
        </div>
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer">
            <User className="w-6 h-6" fill="currentColor" />
            <span className="text-xs mt-1">Profile</span>
          </button>
          <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer">
            <MessageCircle className="w-6 h-6" fill="currentColor" />
            <span className="text-xs mt-1">Message</span>
          </button>
          <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span className="text-xs mt-1">Orders</span>
          </button>
          <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer">
            <ShoppingCart className="w-6 h-6" fill="currentColor" />
            <span className="text-xs mt-1">My cart</span>
          </button>
        </div>
        {/* Hamburger Menu Button for Tablet/Mobile */}
        <button
          className="md:hidden text-[var(--sub-text)] hover:text-[var(--main)] transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile/Tablet Menu, unchanged */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={toggleMenu}
        ></div>
        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[80vw] h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b border-gray-200">
              <button
                className="text-[var(--sub-text)] hover:text-[var(--main)] transition-colors"
                onClick={toggleMenu}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Menu Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="mb-6">
                <SearchBar />
              </div>
              <nav className="flex flex-col space-y-4">
                <button className="flex items-center space-x-3 text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer text-base font-medium">
                  <User className="w-5 h-5" fill="currentColor" />
                  <span>Profile</span>
                </button>
                <button className="flex items-center space-x-3 text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer text-base font-medium">
                  <MessageCircle className="w-5 h-5" fill="currentColor" />
                  <span>Message</span>
                </button>
                <button className="flex items-center space-x-3 text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer text-base font-medium">
                  <Heart className="w-5 h-5" fill="currentColor" />
                  <span>Orders</span>
                </button>
                <button className="flex items-center space-x-3 text-[var(--sub-text)] hover:text-[var(--main)] transition-colors cursor-pointer text-base font-medium">
                  <ShoppingCart className="w-5 h-5" fill="currentColor" />
                  <span>My cart</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;