
export default function HomePage() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="row mb-5 align-items-center">
        <div className="col-lg-6">
          {/* Small Heart Icon */}
          <img
            src="/images/hero-left2.png"
            alt="Heart Icon"
            className="hero-icon"
          />
          <h1 className="hero-title">Welcome to the Aromantic Community</h1>
          <p className="lead">
            Explore resources, share stories, and connect with others on the aromantic spectrum.
          </p>
          <a href="/what-is-aromanticism" className="btn-custom">
            Learn More
          </a>
        </div>
        <div className="col-lg-6">
          {/* Original Image */}
          <img
            src="/images/hero-image-2.png"
            alt="Aromantic Community"
            className="img-fluid rounded"
          />
        </div>
      </div>

      {/* Information Sections */}
      <section className="row mb-5 align-items-center">
        <div className="col-lg-6">
          <h2 className="mb-4">What's Aromanticism?</h2>
          <p className="lead">
            Learn more about aromanticism and what it means to be on the aromantic spectrum.
            Understand the unique experiences and perspectives of aromantic individuals.
          </p>
          <a href="/what-is-aromanticism" className="btn-custom">
            Explore More
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="/images/pic1.png"
            alt="Aromantic Community"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      <section className="row mb-5 align-items-center flex-row-reverse">
        <div className="col-lg-6">
          <h2 className="mb-4">Dos and Don'ts</h2>
          <p className="lead">
            Understand how to interact respectfully with the aromantic community.
            Learn about supportive communication and inclusive practices.
          </p>
          <a href="/dos-and-donts" className="btn-custom">
            Learn More
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="/images/dos-donts.jpg"
            alt="Community Guidelines"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>

      <section className="row mb-5 align-items-center">
        <div className="col-lg-6">
          <h2 className="mb-4">Your Story Matters</h2>
          <p className="lead">
            Share your experiences or read inspiring stories from others in the aromantic community.
            Every narrative contributes to understanding and visibility.
          </p>
          <a href="/your-story" className="btn-custom">
            Share Your Story
          </a>
        </div>
        <div className="col-lg-6">
          <img
            src="/images/community-stories.jpg"
            alt="Community Stories"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
