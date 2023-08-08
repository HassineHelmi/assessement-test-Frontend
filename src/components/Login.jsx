import React, { useState } from "react";
import LoginImage from "../assets/LoginImage.jpg";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // New state for error message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("access_token", data.access_token);

        // Use the history object to navigate to the dashboard
        history.push("/dashboard");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      // Handle error
      console.error("Error:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="bg-gray-800 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl dark:text-white font-bold text-center">
            Sign In
          </h2>
          {/* Display error message if present */}
          {errorMessage && (
            <p className="text-red-500 my-2 text-center">{errorMessage}</p>
          )}
          <div className="flex flex-col text-gray-400 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"
              type="email"
              required
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col text-gray-400 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-between text-gray-400 py-3">
            <p className="flex items-center">
              <input className="mr-2" type="checkbox" />
              Remember Me
            </p>
          </div>
          <button
            type="submit"
            className="w-full my-5 py-2 bg-teal-500 rounded-xl shadow-lg shadow-teal-500/50" 
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="hidden sm:block flex-col justify-center">
        <img className="w-full h-full object-cover" src={LoginImage} alt="" />
      </div>
    </div>
  );
}
