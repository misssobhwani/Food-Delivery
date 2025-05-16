// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import SearchIcon from "../../../public/search.svg";
// import { ShoppingCart } from 'lucide-react';

// components/Header.tsx
import { ShoppingCart, Search } from "lucide-react";
import NavLinks from "../navLinks/page";

<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
    stroke="#83859C"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M14 14L11.1 11.1"
    stroke="#83859C"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>;

export default function Header() {
  function SearchBar() {
    return (
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <img
          src="/search.svg"
          alt="search icon"
          className="pointer-events-none absolute top-1/2"
          style={{
            left: "120px",
            transform: "translateY(-50%)",
            width: "16px",
            height: "16px",
          }}
        />
      </div>
    );
  }

  return (
    <header className="flex items-center justify-between px-[10%] py-4 shadow-sm bg-white">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2 text-xl font-bold">
        <img
          src="/assets/main.png"
          alt="Food Delivery"
          className="mb-6 mx-auto max-w-full h-auto"
          style={{ maxHeight: "150px" }} // optional, adjust as needed
        />
      </div>

      {/* Search */}
      <div>
        <SearchBar />
      </div>

      <NavLinks />

    </header>
  );
}
