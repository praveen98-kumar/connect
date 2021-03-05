import React, { useState } from "react";
import InputField from "../components/InputField";
import Link from "next/link";
const Signup = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });
  const {
    firstname,
    lastname,
    username,
    email,
    password,
    cpassword,
  } = formData;
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
        <h1 className="text-2xl text-gray-800 font-semibold text-center">
          Create New Account
        </h1>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="w-full px-2 h-10 bg-red-100 text-red-700 rounded mt-3">
              {error}
            </div>
          )}
          <div className="grid grid-cols-2 gap-2 mt-4">
            <InputField
              label="First Name"
              placeholder="First Name"
              name="firstname"
              type="text"
              value={firstname}
              onChange={(e) => handleChange(e)}
            />
            <InputField
              label="Last Name"
              placeholder="Last Name"
              name="firstname"
              type="text"
              value={lastname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <InputField
            label="Username"
            placeholder="Enter username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => handleChange(e)}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            name="email"
            type="email"
            value={email}
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
          <InputField
            label="Confirm Password"
            placeholder="Re-Enter your password"
            name="cpassword"
            type="password"
            value={cpassword}
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            className="px-8 w-full rounded mt-4 py-2 bg-gray-800 text-white"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <span>
            Already have an account?{` `}
            <Link href="/login">
              <a className="font-bold text-red-400 hover:text-red-500">
                Log In
              </a>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
