"use client";

import React, { useState } from "react";
import "./styles.css";
import { useRouter } from 'next/navigation';


function LoginPage() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const router = useRouter();

const staticEmail = "sample@gmail.com";
const staticPassword = "password123";


const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email === staticEmail && password === staticPassword){
        router.push("./dashboard");
    } else {
        setError("Invalid email or password.");
    }
}


  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Welcome back!</h1>
        <p className="subtitle">Sign in to your account to continue</p>
        <form onSubmit={handleLogin}>
          <div className="inputGroup">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="checkboxContainer">
            <input type="checkbox" id="remember" className="checkbox" />
            <label htmlFor="remember" className="checkboxLabel">
              Remember me
            </label>
          </div>
          <button type="submit" className="button">
            Sign in
          
      </button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="footer">
          Don’t have an account?{" "}
          <a href="/signup" className="link">
            Sign up
          </a>
        </p>
      </div>
    </div>

  )
}
export default LoginPage;



