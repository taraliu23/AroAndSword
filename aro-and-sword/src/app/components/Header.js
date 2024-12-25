"use client";

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
