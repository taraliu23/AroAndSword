

export default function Hero() {
	return (
		<section className="relative bg-[url('/images/hero-image.jpg')] bg-cover bg-center h-[90vh]">
			<div className="absolute inset-0 bg-gradient-to-r from-green-400 via-gray-100 to-gray-300 opacity-70"></div>
			<div className="container mx-auto relative z-10 text-center text-white">
				<h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-4xl md:text-6xl font-bold"
				>
					Welcome to the Aromantic Community
				</h1>
				<p className="mt-4 text-lg md:text-2xl">
					Explore resources, share stories, and connect with others on the aromantic spectrum.
				</p>
				<div className="mt-6">
					<a
						href="/learn-more"
						className="px-6 py-3 bg-green-600 text-white font-bold rounded shadow-md hover:bg-green-700 transition"
					>
						Get Started
					</a>
				</div>
			</div>
		</section>
	);
}

