// app/components/Tile.tsx
"use client";
import React, { useState } from "react";

type TileProps = {
  label: string;
  icon: string; // can be emoji or image path
};

export default function Tile({ label, icon }: TileProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
    className={`w-[160px] h-[80px] rounded-[10%] flex flex-col items-center justify-center cursor-pointer
      border transition-all duration-200 ease-in-out  hover:border-[#4E60FF] hover:bg-[#F3F4FF]
     `}
  
     style={{
      borderColor: isHovered ? "#4E60FF" : "#EDEEF2",
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
  
    <span className="text-2xl">{icon}</span>
    <span className="text-sm mt-2">{label}</span>
  </div>
  );
}
