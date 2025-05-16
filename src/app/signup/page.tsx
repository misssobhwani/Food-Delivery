'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
  
    e.preventDefault();

    // Save user credentials in localStorage (for demo only)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    alert('Sign-up successful! You can now log in.');
    router.push('/login');
  };

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] px-4"
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
      padding: '16px',
    }}
    >
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded-lg px-10 py-8"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        <div className="flex flex-col items-center space-y-4">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-72 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4E60FF]"
            style={{
              padding: '16px',
              margin: '8px 0',
            }}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-72 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#4E60FF]"
            style={{
              padding: '16px',
              margin: '8px 0',
            }}
          />

          <button
            type="submit"
            className="w-40 bg-[#4E60FF] text-white py-2 rounded hover:bg-[#3a4fe0] transition-colors mt-4"
            style={{
              padding: '16px',
              margin: '8px 0',
              backgroundColor: "#4E60FF",
              height: "44px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}