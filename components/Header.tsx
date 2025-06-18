"use client";
import React, { useState } from "react";
import Container from "./Container";
import { MessageCircle, GripVertical, X, User } from "lucide-react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SearchBar2 from "./SearchBar2";
import HeaderMenu from "./HeaderMenu";
import Carticon from "./Carticon";
import FavoriteButton from "./FavoriteButton";
import { useUserStore } from "@/lib/store";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import toast from "react-hot-toast";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  
  const { user, setUser, clearUser, isLoggedIn } = useUserStore();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email && loginForm.password) {
      setUser({
        name: loginForm.email.split('@')[0],
        email: loginForm.email
      });
      setIsLoginOpen(false);
      setLoginForm({ email: '', password: '' });
      toast.success('Successfully logged in!');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupForm.name && signupForm.email && signupForm.password && signupForm.password === signupForm.confirmPassword) {
      setUser({
        name: signupForm.name,
        email: signupForm.email
      });
      setIsSignupOpen(false);
      setSignupForm({ name: '', email: '', password: '', confirmPassword: '' });
      toast.success('Account created successfully!');
    } else if (signupForm.password !== signupForm.confirmPassword) {
      toast.error('Passwords do not match');
    }
  };

  const handleLogout = () => {
    clearUser();
    toast.success('Successfully logged out!');
  };

  const ProfileSection = () => {
    if (isLoggedIn()) {
      return (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 group relative">
            <div className="w-8 h-8 bg-[var(--main)] rounded-full flex items-center justify-center text-white font-semibold">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="absolute z-50 -bottom-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="font-medium text-white">{user?.name}</div>
              <div className="text-gray-300 text-xs">{user?.email}</div>
              <Button 
                onClick={handleLogout}
                variant="outline"
                size="sm"
                className="mt-2 text-xs border-white text-white hover:bg-white hover:text-gray-800"
              >
                Logout
              </Button>
            </div>
          </div>
          <span className="text-xs text-[var(--sub-text)] font-bold transition-colors cursor-pointer">
            {user?.name}
          </span>
        </div>
      );
    }

    return (
      <div className="flex gap-2">
        <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
          <DialogTrigger asChild>
            <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Sign In</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
              <DialogDescription>
                Enter your credentials to access your account
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90">
                Sign In
              </Button>
              <p className="text-center text-sm">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsLoginOpen(false);
                    setIsSignupOpen(true);
                  }}
                  className="text-[var(--main)] hover:underline"
                >
                  Sign up
                </button>
              </p>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
          <DialogTrigger asChild>
            <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer">
              <User className="w-6 h-6" />
              <span className="text-xs mt-1">Sign Up</span>
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create Account</DialogTitle>
              <DialogDescription>
                Join Shopfluence and start shopping today
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={signupForm.name}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={signupForm.email}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
                  type="password"
                  value={signupForm.password}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={signupForm.confirmPassword}
                  onChange={(e) => setSignupForm(prev => ({ ...prev, confirmPassword: e.target.value }))}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-[var(--main)] hover:bg-[var(--main)]/90">
                Create Account
              </Button>
              <p className="text-center text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignupOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="text-[var(--main)] hover:underline"
                >
                  Sign in
                </button>
              </p>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  return (
    <header className="relative">
      {/* Desktop Header */}
      <Container className="bg-white flex justify-between items-center py-4 px-4 md:px-12">
        <Logo />
        {/* SearchBar with classes preserved and wider width */}
        <div className="hidden md:block w-full max-w-lg mx-6">
          <SearchBar onSearch={(query) => console.log("Search:", query)} />
        </div>
        <div className="hidden md:flex items-center space-x-4 md:space-x-6">
          <ProfileSection />
          <button
            className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
            aria-label="Messages"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs mt-1">Message</span>
          </button>
          <button
            className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
            aria-label="Favorites"
          >
            <FavoriteButton />
            <span className="text-xs mt-1">Favorites</span>
          </button>
          <button
            className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
            aria-label="Shopping cart"
          >
            <Carticon />
            <span className="text-xs mt-1">My cart</span>
          </button>
        </div>
        {/* Hamburger Menu Button for Tablet/Mobile */}
        <button
          className="md:hidden text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <GripVertical className="w-6 h-6" />
          )}
        </button>
      </Container>
      <div className="">
        <HeaderMenu />
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg blur-lg"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
        {/* Menu Content */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-[80vw] h-full bg-white shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex flex-col h-full">
            {/* Close Button */}
            <div className="flex justify-between p-4 border-b border-gray-200">
              <Logo />
              <button
                className="text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer text-base"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Menu Content */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="mb-6">
                <SearchBar2
                  onSearch={(query) => {
                    console.log("Mobile search:", query);
                    handleNavItemClick();
                  }}
                />
              </div>
              <nav className="flex flex-col space-y-6 py-2">
                <div onClick={handleNavItemClick} className="px-2">
                  <div className="flex flex-col items-center">
                    <ProfileSection />
                  </div>
                </div>
                <button
                  onClick={handleNavItemClick}
                  className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-xs mt-1">Message</span>
                </button>
                <button
                  onClick={handleNavItemClick}
                  className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                >
                  <FavoriteButton />
                  <span className="text-xs mt-1">Favorites</span>
                </button>
                <button
                  onClick={handleNavItemClick}
                  className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
                >
                  <Carticon />
                  <span className="text-xs mt-1">My cart</span>
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