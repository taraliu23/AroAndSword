// app/components/PageLayout.js
const PageLayout = ({ title, children }) => {
	return (
		<div className="container mt-5">
			{/* Hero Section */}
			<div className="hero-section text-center">
				<h1 className="text-primary">{title}</h1>
			</div>

			{/* Main Content */}
			<div className="row mt-4">
				<div className="col-lg-8">
					{children}
				</div>
				<div className="col-lg-4">
					{/* Sidebar */}
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Quick Links</h5>
							<ul className="list-group">
								<li className="list-group-item">
									<a href="/what-is-aromanticism">What’s Aromanticism?</a>
								</li>
								<li className="list-group-item">
									<a href="/dos-and-donts">Dos and Don'ts</a>
								</li>
								<li className="list-group-item">
									<a href="/your-story">Your Story</a>
								</li>
								<li className="list-group-item">
									<a href="/relax">Relax</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageLayout;
