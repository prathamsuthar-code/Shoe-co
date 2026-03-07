import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const App = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setError("");

  try {

    const response = await axios.post(
      "http://localhost:8000/api/auth/signup",
      formData
    );

    localStorage.setItem("user", JSON.stringify(response.data.user));

    navigate("/");
    localStorage.setItem("access_token" , response.data.token)
    setIsLoggedIn(response.data.token)

  } catch (err) {

    const message =
      err.response?.data?.message ||
      err.response?.data?.error ||
      "Something went wrong";

    setError(message);

  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold text-[#002b64]">SHOE.CO</h1>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-6">
          Create Account
        </h2>

        {error && (
  <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm mb-4">
    {error}
  </div>
)}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* First & Last Name */}
          <div className="flex gap-3">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
              required
            />
          </div>

          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
            required
          />

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#002b64] text-white py-2 rounded-lg hover:bg-[#001b3f] transition duration-300 font-medium disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/Signin")}
            className="text-[#002b64] cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
};

export default App;