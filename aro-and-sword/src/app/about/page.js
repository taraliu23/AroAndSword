export default function AboutPage() {
	return (
		<section className="container mx-auto py-10 px-4">
			<h1 className="text-4xl font-bold text-center text-green-600 mb-6">
				About Aro and Sword
			</h1>
			<p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
				Aro and Sword is a space dedicated to fostering understanding, building connections,
				and celebrating the aromantic community. We provide resources, share stories,
				and create opportunities for individuals to explore their identities.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="p-6 bg-white rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
					<p className="text-gray-700">
						Our mission is to create a safe and welcoming environment for people on the
						aromantic spectrum. We strive to educate the wider community, amplify
						aromantic voices, and provide resources that empower individuals to embrace their identity.
					</p>
				</div>

				<div className="p-6 bg-white rounded-lg shadow-lg">
					<h2 className="text-2xl font-semibold text-green-600 mb-4">Our Vision</h2>
					<p className="text-gray-700">
						We envision a world where the aromantic community is understood, accepted, and
						celebrated. Through education, advocacy, and community-building, we aim to
						create a more inclusive society for everyone.
					</p>
				</div>
			</div>

			<div className="mt-10 text-center">
				<a
					href="/contact"
					className="inline-block px-6 py-3 bg-green-600 text-white font-bold rounded shadow-lg hover:bg-green-700 transition"
				>
					Contact Us
				</a>
			</div>
		</section>
	);
}
