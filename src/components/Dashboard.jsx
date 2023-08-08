import React, { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div className="bg-gray-800 h-screen flex justify-center items-center">
      <h1 className="text-4xl text-white">Welcome to the Dashboard!</h1>
    </div>
  );
}
