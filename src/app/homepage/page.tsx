"use client";

import React from "react";
import Header from "../navbar/page";
import MainBody from "../mainbody/page";


export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col" style={{ gap: '16px' }}>
    <Header />
    <MainBody />
  </div>
  );
}
