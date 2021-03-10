import React from "react";
import { Footer, Navbar } from "..";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
