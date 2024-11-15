// app/components/Navbar.js
import Link from 'next/link';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="custom-navbar">
			<ul className="nav-list">
				<li><Link href="/">Home</Link></li>
				<li><Link href="/what-is-aromanticism">What’s Aromanticism?</Link></li>
				<li><Link href="/dos-and-donts">Dos and Don'ts</Link></li>
				<li><Link href="/your-story">Your Story</Link></li>
				<li><Link href="/relax">Relax</Link></li>
			</ul>
		</nav>
	);
};

export default Navbar;
