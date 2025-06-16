"use client";
import React from "react";
import { User } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const Profile = () => {
  const { isSignedIn, user } = useUser();

  if (isSignedIn && user) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 group relative">
          <div className="relative">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8",
                  userButtonAvatarBox: "w-full h-full",
                },
              }}
            />
            <div className="absolute z-50 -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="font-medium text-[var(--white)]">{user.fullName || ""}</div>
              <div className="text-[var(--sub-text)] text-[11px]">{user.primaryEmailAddress?.emailAddress || ""}</div>
            </div>
          </div>
        </div>
        <span className="text-xs text-[var(--sub-text)] font-bold transition-colors cursor-pointer">{user.fullName || ""}</span>
      </div>
    );
  }

  return (
    <SignInButton mode="modal">
      <button className="flex flex-col items-center text-[var(--sub-text)] hover:text-[var(--main)] font-bold transition-colors cursor-pointer"
        aria-label="Sign in">
        <User className="w-6 h-6" />
        <span className="text-xs mt-1">Sign In</span>
      </button>
    </SignInButton>
  );
};

export default Profile;
