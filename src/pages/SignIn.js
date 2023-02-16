import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleLogin = async () => {
    if (!userName) {
      alert("vui long nhap ten dang nhap");
    } else {
      const res = await login(userName);
      const token = res.accessToken;
      localStorage.setItem("token", token);
      navigate("/");
    }
  };
  return (
    <div className="container ">
      <div className="signin-header">
        <img src="/logo.png" alt="" />
      </div>
      <form onSubmit={handleSubmit} className="form-submit">
        <h3 className="signin-heading">Sign In </h3>
        <div className="form-wrap">
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit" onClick={handleLogin}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
