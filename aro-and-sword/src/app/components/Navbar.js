

import React from 'react'

const Navbar = () => {
	return (
		<nav className="navbar-container">
			<div className="navbar-logo">
				<a href="/">
					<img src="/images/logo.png" alt="My Logo" className="logo-image" />
					<span className="logo-text">Aro & Sword</span>
				</a>
			</div>

			<ul className="navbar-links">
				<li>
					<a href="/">
						[Home]
					</a>
				</li>

				<li>
					<a href="/bingo">
						[Bingo Games!]
					</a>
				</li>

				<li>
					<a href="/resources">
						[Resources]
					</a>
				</li>

				<li>
					<a href="/manifesto">
						[Manifesto]
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
