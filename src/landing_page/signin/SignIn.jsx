import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    try {
      const res = await axios.post(
        "https://zerodha-dashboard-gules-kappa.vercel.app/login",
        data,
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "https://zerodha-dashboard-gules-kappa.vercel.app/orders";
      }

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign In</h3>

        <form onSubmit={handleSubmit}>
          
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Sign In
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Don't have an account?{" "}
          <Link to="/signup" className="text-decoration-none">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;