import React, { useState } from "react";
// import "./LGBTQIAExplanation.css";

const LGBTQIAExplanation = () => {
	const [hoveredLetter, setHoveredLetter] = useState(null);

	const letters = [
		{ id: "L", name: "Lesbian", wiki: "https://en.wikipedia.org/wiki/Lesbian", img: "/images/l.png" },
		{ id: "G", name: "Gay", wiki: "https://en.wikipedia.org/wiki/Gay", img: "/images/g.png" },
		{ id: "B", name: "Bisexual", wiki: "https://en.wikipedia.org/wiki/Bisexuality", img: "/images/b.png" },
		{ id: "T", name: "Transgender", wiki: "https://en.wikipedia.org/wiki/Transgender", img: "/images/t.png" },
		{ id: "Q", name: "Queer/Questioning", wiki: "https://en.wikipedia.org/wiki/Queer", img: "/images/q.png" },
		{ id: "I", name: "Intersex", wiki: "https://en.wikipedia.org/wiki/Intersex", img: "/images/i.png" },
		{ id: "A", name: "Asexual/Aromantic/Agender", wiki: "https://en.wikipedia.org/wiki/Asexuality", img: "/images/a.png" },
		{ id: "+", name: "More identities", wiki: "https://en.wikipedia.org/wiki/LGBT", img: "/images/plus.png" },
	];

	return (
		<div className="lgbtqia-wrapper">
			<h2 className="info-title">What Does LGBTQIA+ Stand For?</h2>
			<div className="letters-grid">
				{letters.map((letter) => (
					<div
						key={letter.id}
						className="letter-container"
						onMouseEnter={() => setHoveredLetter(letter.id)}
						onMouseLeave={() => setHoveredLetter(null)}
					>
						<img src={letter.img} alt={letter.id} className="letter-image" />
						{hoveredLetter === letter.id && (
							<div className="hover-info">
								<p className="letter-name">{letter.name}</p>
								<a
									href={letter.wiki}
									target="_blank"
									rel="noopener noreferrer"
									className="learn-more-button"
								>
									Learn More
								</a>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default LGBTQIAExplanation;
