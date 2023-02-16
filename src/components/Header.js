import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = async () => {
    localStorage.removeItem("token");
    await logout();
    navigate("/");
  };
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="/logo.png" alt="logo" className="header__img" />
        </Link>
        {!token || token === "undefined" ? (
          <div className="header__signIn btn">
            <Link to="/sign-in">Sign In</Link>
          </div>
        ) : (
          <div className="button">
            <div className="header__signIn btn">
              <Link to="/profile">Profile</Link>
            </div>
            <div className="header__signIn btn">
              <Link to="/" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
