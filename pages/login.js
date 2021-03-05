import React, { useState } from "react";
import InputField from "../components/InputField";
import Link from "next/link";
const Login = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    usernameOrEmail: "",
    password: "",
  });
  const { usernameOrEmail, password } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="mx-auto bg-white shadow-lg max-w-md w-full flex flex-col p-8 border border-gray-100 rounded-lg">
        <h1 className="text-2xl text-gray-800 font-semibold text-center mb-4">
          Log into account
        </h1>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="w-full px-2 h-10 bg-red-100 text-red-700 rounded mb-3">
              {error}
            </div>
          )}
          <InputField
            label="Username or Email"
            placeholder="Enter username or email"
            name="usernameOrEmail"
            type="text"
            value={usernameOrEmail}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="px-8 w-full rounded mt-4 py-2 bg-gray-800 text-white"
          >
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <span>
            Don't have an account?{` `}
            <Link href="/signup">
              <a className="font-bold text-red-400 hover:text-red-500">
                Sign Up
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
