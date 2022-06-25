import React from "react";
import Logo from "../Icons/Logo";

export default function Header() {
  return (
    <header className="w-full py-5 flex justify-center items-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
