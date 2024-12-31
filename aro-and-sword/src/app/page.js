// export default function HomePage() {
//   return (
//     <div className="container mt-5">
//       {/* Hero Section */}
//       <div className="row mb-5 align-items-center">
//         <div className="col-lg-6">
//           {/* Small Heart Icon */}
//           <img
//             src="/images/hero-left2.png" /* Replace with the path to the heart icon */
//             alt="Heart Icon"
//             className="hero-icon"
//           />
//           <h1 className="hero-title">Welcome to the Aromantic Community</h1>
//           <p className="lead">
//             Explore resources, share stories, and connect with others on the aromantic spectrum.
//           </p>
//           <a href="/what-is-aromanticism" className="btn-custom">
//             Learn More
//           </a>
//         </div>
//         <div className="col-lg-6">
//           {/* Original Image */}
//           <img
//             src="/images/hero-image.jpg" /* Replace with your actual original image path */
//             alt="Aromantic Community"
//             className="img-fluid rounded"
//           />
//         </div>
//       </div>

//       {/* Highlights Section */}
//       <div className="row">
//         <div className="col-md-4">
//           <div className="custom-card">
//             <div className="custom-card-body">
//               <h5 className="custom-card-title">What’s Aromanticism?</h5>
//               <p className="custom-card-text">
//                 Learn more about aromanticism and what it means to be on the aromantic spectrum.
//               </p>
//               <a href="/what-is-aromanticism" className="btn-custom">
//                 Explore
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="custom-card">
//             <div className="custom-card-body">
//               <h5 className="custom-card-title">Dos and Don'ts</h5>
//               <p className="custom-card-text">
//                 Understand how to interact respectfully with the aromantic community.
//               </p>
//               <a href="/dos-and-donts" className="btn-custom">
//                 Learn More
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="custom-card">
//             <div className="custom-card-body">
//               <h5 className="custom-card-title">Your Story</h5>
//               <p className="custom-card-text">
//                 Share your experiences or read inspiring stories from others.
//               </p>
//               <a href="/your-story" className="btn-custom">
//                 Read Stories
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
            src="/images/hero-image.jpg"
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
            src="/images/aromanticism-info.jpg"
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
