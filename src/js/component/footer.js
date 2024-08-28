import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer fixed-bottom py-3 bg-light text-center bg-opacity-25 d-flex justify-content-between">
		<span className="px-5 mx-5"></span>
		<p className="my-auto ms-5">
			Made by{" "}
			<a href="https://github.com/daviniapd" className="link-secondary">daviniapd</a> <i className="fa-solid fa-otter text-secondary" /> {" "}
			in{" "}
			<a href="http://www.4geeksacademy.com" className="link-secondary">4Geeks Academy</a> 
		</p>

		<Link to="/" className="">
			<button className="btn btn-outline-secondary me-5">Select Design</button>
		</Link>


	</footer>
);
