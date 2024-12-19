export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-10">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				{/* Column 1 */}
				<div>
					<h4 className="font-bold text-lg">About Us</h4>
					<p className="mt-2 text-gray-400">
						AroSpace is dedicated to creating a welcoming space for the aromantic community.
					</p>
				</div>
				{/* Column 2 */}
				<div>
					<h4 className="font-bold text-lg">Quick Links</h4>
					<ul className="mt-2 space-y-2">
						<li>
							<a href="/" className="text-gray-400 hover:text-green-400 transition">
								Home
							</a>
						</li>
						<li>
							<a href="/about" className="text-gray-400 hover:text-green-400 transition">
								About
							</a>
						</li>
						<li>
							<a href="/resources" className="text-gray-400 hover:text-green-400 transition">
								Resources
							</a>
						</li>
					</ul>
				</div>
				{/* Column 3 */}
				<div>
					<h4 className="font-bold text-lg">Follow Us</h4>
					<div className="mt-2 space-x-4">
						<a href="https://facebook.com" className="text-gray-400 hover:text-green-400 transition">
							Facebook
						</a>
						<a href="https://twitter.com" className="text-gray-400 hover:text-green-400 transition">
							Twitter
						</a>
						<a href="https://instagram.com" className="text-gray-400 hover:text-green-400 transition">
							Instagram
						</a>
					</div>
				</div>
			</div>
			<div className="text-center text-gray-500 mt-6">
				© {new Date().getFullYear()} AroSpace. All rights reserved.
			</div>
		</footer>
	);
}
