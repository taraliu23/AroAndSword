"use client";

import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-primary">
			<div className="container">
				<Link href="/" className="navbar-brand text-white">Aromantic Community</Link>
				{/* Directly display the navigation links */}
				<ul className="navbar-nav d-flex flex-row gap-3">
					<li className="nav-item">
						<Link href="/" className="nav-link text-white">Home</Link>
					</li>
					<li className="nav-item">
						<Link href="/what-is-aromanticism" className="nav-link text-white">What’s Aromanticism?</Link>
					</li>
					<li className="nav-item">
						<Link href="/dos-and-donts" className="nav-link text-white">Dos and Don'ts</Link>
					</li>
					<li className="nav-item">
						<Link href="/your-story" className="nav-link text-white">Your Story</Link>
					</li>
					<li className="nav-item">
						<Link href="/relax" className="nav-link text-white">Relax</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
