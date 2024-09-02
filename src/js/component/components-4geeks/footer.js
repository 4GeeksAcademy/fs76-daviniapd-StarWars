import React, { Component } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Footer = () => {
  const location = useLocation();

	if (location.pathname === "/homeDaviniapd") {
		return null;
	}
  return (
	<footer className="footer py-2 bg-warning text-center bg-opacity-25 d-flex justify-content-between">
    <div className="container d-flex align-items-center justify-content-between">
	<span></span>
      <p className="my-auto mx-2">
        Made by{" "}
        <a href="https://github.com/daviniapd" className="link-secondary">daviniapd</a> <i className="fa-solid fa-otter text-secondary" /> {" "}
        in{" "}
        <a href="http://www.4geeksacademy.com" className="link-secondary">4Geeks Academy</a> 
      </p>
      <Link to="/" className="mx-2">
        <button className="btn btn-outline-secondary">Select Design</button>
      </Link>
    </div>
  </footer>

);
};
