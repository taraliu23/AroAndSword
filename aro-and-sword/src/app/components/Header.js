"use client";

// import Link from 'next/link';

// const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-primary">
// 			<div className="container">
// 				<Link href="/" className="navbar-brand text-white">Aromantic Community</Link>
// 				{/* Directly display the navigation links */}
// 				<ul className="navbar-nav d-flex flex-row gap-3">
// 					<li className="nav-item">
// 						<Link href="/" className="nav-link text-white">Home</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link href="/what-is-aromanticism" className="nav-link text-white">What’s Aromanticism?</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link href="/dos-and-donts" className="nav-link text-white">Dos and Don'ts</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link href="/your-story" className="nav-link text-white">Your Story</Link>
// 					</li>
// 					<li className="nav-item">
// 						<Link href="/relax" className="nav-link text-white">Relax</Link>
// 					</li>
// 				</ul>
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

import { useState, useEffect } from 'react';

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header
			className={`fixed w-full top-0 z-50 transition-all ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
				}`}
		>
			<div className="container mx-auto flex justify-between items-center py-4 px-6">
				<h1 className="text-2xl font-bold text-green-600">AroSpace</h1>
				<nav className="hidden md:flex space-x-6">
					<a href="/" className="text-gray-800 hover:text-green-600 transition">
						Home
					</a>
					<a href="/about" className="text-gray-800 hover:text-green-600 transition">
						About
					</a>
					<a href="/resources" className="text-gray-800 hover:text-green-600 transition">
						Resources
					</a>
					<a href="/contact" className="text-gray-800 hover:text-green-600 transition">
						Contact
					</a>
				</nav>
				<div className="md:hidden">
					{/* Hamburger Menu */}
				</div>
			</div>
		</header>
	);
}
