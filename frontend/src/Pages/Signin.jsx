import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const SignIn = ({setIsLoggedIn}) => {

  const navigate = useNavigate();
  const { loginUser } = useCart()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {

    setError("");

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setError("");

    try {

      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );

      // save token
      if (res.data?.token) {
        localStorage.setItem("access_token", res.data.token);
      }

      if (res.data?.user) {

     localStorage.setItem("user", JSON.stringify(res.data.user));

       // Save userId for cart
        localStorage.setItem("userId", res.data.user.id);

        // Notify CartContext
        loginUser(res.data.user.id);

      }
      console.log("Login success:", res.data);

      navigate("/");
      console.log(res.data.token)
      setIsLoggedIn(res.data.token)

    } catch (err) {

      console.log("Login error:", err);

      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed";

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
          <h1 className="text-2xl font-bold text-[#002b64]">
            SHOE.CO
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-semibold text-center mb-6">
          Welcome Back
        </h2>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#002b64]"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#002b64] text-white py-2 rounded-lg hover:bg-[#001b3f] transition duration-300 font-medium disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

        </form>

        <p className="text-sm text-center mt-4 text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-[#002b64] hover:underline">
            Sign Up
          </a>
        </p>

      </div>

    </div>
  );
};

export default SignIn;