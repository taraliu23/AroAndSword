

// import React from 'react'

// const Navbar = () => {
// 	return (
// 		<nav className="navbar-container">
// 			<div className="navbar-logo">
// 				<a href="/">
// 					<img src="/images/logo.png" alt="My Logo" className="logo-image" />
// 					<span className="logo-text">Aro & Sword</span>
// 				</a>
// 			</div>

// 			<ul className="navbar-links">
// 				<li>
// 					<a href="/">
// 						[Home]
// 					</a>
// 				</li>

// 				<li>
// 					<a href="/bingo">
// 						[Bingo Games!]
// 					</a>
// 				</li>

// 				<li>
// 					<a href="/resources">
// 						[Resources]
// 					</a>
// 				</li>

// 				<li>
// 					<a href="/manifesto">
// 						[Manifesto]
// 					</a>
// 				</li>
// 			</ul>
// 		</nav>
// 	)
// }

// export default Navbar

import React, { useState, useEffect } from 'react';

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Always show nav links on desktop, toggle on mobile
	const navLinksClass = isMobile
		? `navbar-links${open ? ' active' : ''}`
		: 'navbar-links active';
	return (
		<nav className="navbar-container">
			<div className="navbar-logo">
				<a href="/">
					<img src="/images/logo.png" alt="My Logo" className="logo-image" />
					<span className="logo-text">Aro & Sword</span>
				</a>
			</div>
			{/* Hamburger toggle only visible on mobile */}
			{isMobile && (
				<button
					className="navbar-toggle"
					aria-label="Toggle navigation"
					onClick={() => setOpen((o) => !o)}
				>
					&#9776;
				</button>
			)}
			{(!isMobile || open) && (
				<ul className="navbar-links active">
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
			)}
		</nav>
	);


};

export default Navbar
