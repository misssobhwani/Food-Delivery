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
    <form onSubmit={handleSignup}>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      /><br />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      /><br />
      <button type="submit">Sign Up</button>
    </form>
  );
}