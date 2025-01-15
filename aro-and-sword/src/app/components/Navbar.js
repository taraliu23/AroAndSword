// 'use client';

// import React from "react";

// import Link from "next/link"; // Next.js navigation

// export default function Navbar() {
// 	return (
// 		<nav className="navbar">
// 			<div className="navbar-container">
// 				{/* Logo */}
// 				<div className="logo">++ HelloAro</div>

// 				{/* Navigation Links */}
// 				<ul className="nav-links">
// 					<li><a href="/">Home</a></li>
// 					<li><Link href="/what-is-aromanticism">What is Aromanticism?</Link></li>
// 					<li><a href="/split-attraction-model">Split Attraction Model</a></li>
// 					<li><a href="/resources">Resources</a></li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// }

import React from 'react'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">MyLogo</div>
			<ul className="navbar-links">
				<li><a href="#hero-section">Hero</a></li>
				<li><a href="#typewriter-hero">Typewriter</a></li>
				<li><a href="#bingo">Bingo</a></li>
				<li><a href="#what-is-aromanticism">What is Aromanticism</a></li>
				<li><a href="#split-attraction-model">SAM</a></li>
				<li><a href="#resources">Resources</a></li>
			</ul>
		</nav>
	)
}

export default Navbar
