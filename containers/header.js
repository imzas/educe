import React from "react";
import { MainNav } from "../components";

export default function Header() {
  return (
    <div className="bg-gray-300 p-5">
      <div className="flex items-center">
        <img
          src="https://images.static-collegedunia.com/public/asset/img/cd_logo.png?v=1"
          alt="Vidyavas"
          className="pr-10"
        />
        <MainNav />
      </div>
      <div></div>
    </div>
  );
}
