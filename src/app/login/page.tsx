"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      alert("Login successful!");
      router.push("/homepage");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Half - With padding and centering */}
      <div className="w-1/2 flex items-center justify-center bg-white">
        {/*  Login card with controlled width and padding */}
        <div className="w-[60%] p-8  rounded-lg shadow">
          <img
            src="/assets/main.png"
            alt="Food Delivery"
            className="mb-6 mx-auto max-w-full h-auto"
            style={{ maxHeight: "150px" }}
          />
          <h2 className="text-[35px] font-bold mb-6 text-left text-[#2B2B43]">
            Login
          </h2>
          <div className="p-4 bg-white rounded-lg shadow-lg max-w-md mx-auto mb-6">
            <p className="mb-6 p-4 bg-white rounded-md shadow-md text-[#000000] font-bold text-[14px] leading-[20px] tracking-[0.1px]">
              Sign in with your data that you entered during your registration.
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-3"
            style={{ gap: "16px" }}
          >
            <div className="flex flex-col ">
              <label
                className="block text-sm font-medium text-[#83859C] mb-4 px-2 py-1 rounded-md shadow-sm bg-red-200"
                style={{ color: "#83859C" }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-[34px] px-4 py-2 border border-[#E4E6F1] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#2B2B43] placeholder:text-[#83859C] rounded-[10px]"
                placeholder="name@example.com"
              />
            </div>

            <div className="flex flex-col">
              <label
                className="block font-medium text-sm mb-1 rounded-lg shadow px-2 py-1"
                style={{ color: "#83859C" }}
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full h-[34px] px-4 py-2 border border-[#E4E6F1] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#2B2B43] placeholder:text-[#83859C] rounded-[10px]"
                placeholder="min. 8 characters"
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm text-[#83859C] mt-2 mb-4">
              <label className="flex items-center space-x-2 text-[14px]">
                <input
                  type="checkbox"
                  className="form-checkbox rounded text-[#4E60FF] text-[14px]"
                />
                <span className="text-[14px]">Keep me logged in</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[44px] bg-[#4E60FF] text-white font-semibold text-sm rounded-lg flex items-center justify-center shadow-md hover:bg-[#3b4ce0] transition"
              style={{
                backgroundColor: "#4E60FF",
                height: "44px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Login
            </button>
          </form>

          <div
            className="w-full text-center mt-4"
            style={{ marginTop: "16px" }}
          >
            <Link
              href="/forgot-password"
              className="text-[14px] text-[#4E60FF] hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Half - Unaffected media image */}
      <div className="w-1/2  md:flex items-center justify-center bg-gray-100">
        <img
          src="/assets/media.png"
          alt="Media"
          className="max-w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
