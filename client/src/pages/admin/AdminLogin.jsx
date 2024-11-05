import { Password, RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AdminLogin = () => {
  const [secretKey, setSecretKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic
    console.log(secretKey);
  };

  const isAdmin = true;

  if (isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-2 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Secret Key..."
            className="w-full pl-4 pr-10 py-2 border rounded-lg outline-none focus:ring-indigo-200"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            required
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-0.5 right-2"
          >
            {showPassword ? <RemoveRedEye /> : <VisibilityOff />}
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
