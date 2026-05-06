import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await axios.post(
        "https://zerodha-dashboard-gules-kappa.vercel.app/signup",
        data,
        {
          withCredentials: true,
        }
      );

      if (res.data.success) {
        window.location.href = "https://zerodha-dashboard-gules-kappa.vercel.app/orders";
      }

    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        <form onSubmit={handleSubmit}>
          
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

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              required
            />
          </div>

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
            Sign Up
          </button>
        </form>

        <p className="text-center mt-3 mb-0">
          Already have an account?{" "}
          <Link to="/signin" className="text-decoration-none">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;