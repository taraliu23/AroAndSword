export default function HomePage() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="row mb-5">
        <div className="col-lg-6">
          <h1 className="text-primary">Welcome to the Aromantic Community</h1>
          <p className="lead">
            Explore resources, share stories, and connect with others on the aromantic spectrum.
          </p>
          <a href="/what-is-aromanticism" className="btn btn-primary btn-lg">
            Learn More
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="/images/hero-image.jpg"
            alt="Aromantic Community"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Highlights Section */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">What’s Aromanticism?</h5>
              <p className="card-text">
                Learn more about aromanticism and what it means to be on the aromantic spectrum.
              </p>
              <a href="/what-is-aromanticism" className="btn btn-outline-primary">
                Explore
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dos and Don'ts</h5>
              <p className="card-text">
                Understand how to interact respectfully with the aromantic community.
              </p>
              <a href="/dos-and-donts" className="btn btn-outline-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Your Story</h5>
              <p className="card-text">
                Share your experiences or read inspiring stories from others.
              </p>
              <a href="/your-story" className="btn btn-outline-primary">
                Read Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
