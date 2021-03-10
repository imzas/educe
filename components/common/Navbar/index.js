import React from "react";
import Logo from "./Logo";
import Explore from "./Explore";
import { MobileMenu, UserProfile } from "components/icons";

export default function Navbar() {
  return (
    <div className="bg-white shadow">
      <div className="flex justify-between items-center px-5 py-4 md:max-w-7xl md:mx-auto">
        <div className="md:hidden">
          <MobileMenu />
        </div>
        <div className="flex items-center space-x-10">
          <Logo />
          <Explore />
        </div>
        <div className="flex items-center space-x-2 md:bg-blue-700 md:hover:bg-blue-900 md:px-5 md:py-2 md:rounded md:shadow md:text-white cursor-pointer">
          <UserProfile />
          <div className="hidden md:block">Login / SignUp</div>
        </div>
      </div>
    </div>
  );
}
