

import React from 'react'

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="navbar-logo">
				{/* Replace "MyLogo" with a logo image and link it to the home page */}
				<a href="/">
					<img src="/images/logo.png" alt="My Logo" className="logo-image" />
					<span className="logo-text">Aro & Sword</span>
				</a>
			</div>
			<ul className="navbar-links">
				<li><a href="/">[Home]</a></li>
				{/* <li><a href="#typewriter-hero">Typewriter</a></li> */}
				<li><a href="/bingo">[Bingo Games!]</a></li>
				{/* <li><a href="#what-is-aromanticism">What is Aromanticism</a></li> */}
				{/* <li><a href="#split-attraction-model">SAM</a></li> */}
				<li><a href="#resources">[Resources]</a></li>
				<li><a href="#resources">[Get Involved]</a></li>
			</ul>
		</nav>
	)
}

export default Navbar
