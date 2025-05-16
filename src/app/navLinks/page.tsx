// app/components/NavLinks.tsx
"use client";
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function NavLinks() {
  return (
<div className="nav-container">
  {/* Left Section */}
  <div className="nav-left">
    <div className="nav-item">Restaurants</div>
    <div className="nav-item">Deals</div>
  </div>

  {/* Divider */}
  <div className="nav-divider" />

  {/* Right Section */}
  <div className="nav-right">
    <div className="nav-item">My Orders</div>
    <div className="nav-icon">
      <ShoppingCart className="icon" />
    </div>
    <div className="user-circle" />
    <img src="/assets/default.png" alt="User Icon" className="user-img" />
  </div>
</div>
  );
}



