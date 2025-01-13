// import GitHubIcon from '@mui/icons-material/GitHub';
// export default function Footer() {
// 	return (
// 		<footer className="footer">
// 			<div className="footer-container">
// 				{/* Logo Section */}
// 				<div className="footer-section">
// 					<img
// 						src="/images/logo.png"
// 						alt="Aro-n-Sword Logo"
// 						className="footer-logo"
// 						width={100
// 						}
// 					/>
// 				</div>

// 				{/* Quick Links Section */}
// 				<div className="footer-section">
// 					<h4>Quick Links</h4>
// 					<ul>
// 						<li><a href="/">Home</a></li>
// 						<li><a href="/what-is-aromanticism">What is Aromanticism?</a></li>
// 						<li><a href="/split-attraction-model">Split Attraction Model</a></li>
// 						<li><a href="/resources">Resources</a></li>
// 					</ul>
// 				</div>

// 				{/* About Section */}
// 				<div className="footer-section">
// 					<h4>About</h4>
// 					<p>
// 						🏹 This is an open source community site to provide resources, stories, and support for people on the
// 						aromantic spectrum 🌈

// 					</p>
// 				</div>

// 				{/* GitHub Icon Section */}
// 				<div className="footer-section">
// 					<h4>GitHub</h4>
// 					<a
// 						href="https://github.com/taraliu23/AroAndSword"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="github-link"
// 					>
// 						{/* <img
// 							src="/images/github-icon.png" // Update this path to your GitHub icon
// 							alt="GitHub"
// 							className="social-icon"
// 						/> */}
// 						<GitHubIcon />
// 					</a>
// 				</div>
// 			</div>
// 			<div className="footer-bottom">
// 				<p>© 2024-{new Date().getFullYear()} Aro-n-Sword. All rights reserved💚🤍🩶🖤.</p>
// 			</div>
// 		</footer>
// 	);
// }

import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="footer-container">


				<div className="footer-section">
					<img
						src="/images/logo.png"
						alt="Aro-n-Sword Logo"
						className="footer-logo"
						width={100}
					/>
				</div>
				{/* Quick Links Section */}
				<div className="footer-section">
					<h4>Quick Links</h4>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/what-is-aromanticism">What is Aromanticism?</a></li>
						<li><a href="/split-attraction-model">Split Attraction Model</a></li>
						<li><a href="/resources">Resources</a></li>
					</ul>
				</div>

				{/* About Section */}
				<div className="footer-section">
					<h4>About</h4>
					<p>
						🏹 This is an open-source community site providing resources, stories, and support
						for people on the aromantic spectrum 🌈.
					</p>
				</div>

				{/* Open to Collaboration Section */}
				<div className="footer-section">
					<h4>Open to Collaboration</h4>
					<a
						href="https://github.com/taraliu23/AroAndSword"
						target="_blank"
						rel="noopener noreferrer"
						className="github-link"
					>
						<GitHubIcon fontSize="large" />
					</a>
				</div>
			</div>
			<div className="footer-bottom">
				<p>© 2024-{new Date().getFullYear()} Aro-n-Sword. All rights reserved 💚🤍🩶🖤.</p>
			</div>
		</footer>
	);
}
