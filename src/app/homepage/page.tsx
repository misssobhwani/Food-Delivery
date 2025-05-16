"use client";

import React from "react";
import Header from "../navbar/page";
import { Main } from "next/document";
import MainBody from "../mainbody/page";


export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col" style={{ gap: '16px' }}>
    <Header />
    <MainBody />
  </div>
  );
}
