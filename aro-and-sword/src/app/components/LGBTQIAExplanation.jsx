// import React, { useState } from "react";
// // import "./LGBTQIAExplanation.css";

// const LGBTQIAExplanation = () => {
// 	const [hoveredLetter, setHoveredLetter] = useState(null);

// 	const letters = [
// 		{ id: "L", name: "Lesbian", wiki: "https://en.wikipedia.org/wiki/Lesbian", img: "/images/l.png" },
// 		{ id: "G", name: "Gay", wiki: "https://en.wikipedia.org/wiki/Gay", img: "/images/g.png" },
// 		{ id: "B", name: "Bisexual", wiki: "https://en.wikipedia.org/wiki/Bisexuality", img: "/images/b.png" },
// 		{ id: "T", name: "Transgender", wiki: "https://en.wikipedia.org/wiki/Transgender", img: "/images/t.png" },
// 		{ id: "Q", name: "Queer/Questioning", wiki: "https://en.wikipedia.org/wiki/Queer", img: "/images/q.png" },
// 		{ id: "I", name: "Intersex", wiki: "https://en.wikipedia.org/wiki/Intersex", img: "/images/i.png" },
// 		{ id: "A", name: "Asexual/Aromantic/Agender", wiki: "https://en.wikipedia.org/wiki/Asexuality", img: "/images/a.png" },
// 		{ id: "+", name: "More identities", wiki: "https://en.wikipedia.org/wiki/LGBT", img: "/images/plus.png" },
// 	];

// 	return (
// 		<div className="lgbtqia-wrapper">
// 			<h2 className="info-title">What Does LGBTQIA+ Stand For?</h2>
// 			<div className="letters-grid">
// 				{letters.map((letter) => (
// 					<div
// 						key={letter.id}
// 						className="letter-container"
// 						onMouseEnter={() => setHoveredLetter(letter.id)}
// 						onMouseLeave={() => setHoveredLetter(null)}
// 					>
// 						<img src={letter.img} alt={letter.id} className="letter-image" />
// 						{hoveredLetter === letter.id && (
// 							<div className="hover-info">
// 								<p className="letter-name">{letter.name}</p>
// 								<a
// 									href={letter.wiki}
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="learn-more-button"
// 								>
// 									Learn More
// 								</a>
// 							</div>
// 						)}
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default LGBTQIAExplanation;

import React, { useState } from "react";

const LGBTQIAExplanation = () => {
	const [selectedLetter, setSelectedLetter] = useState({
		name: "Lesbian",
		description: "A lesbian is a woman who is attracted to other women.",
		wiki: "https://en.wikipedia.org/wiki/Lesbian",
	});

	const letters = [
		{ id: "L", name: "👩🏽‍❤️‍💋‍👩🏽 Lesbian 👭", description: "Women attracted to other women.", wiki: "https://en.wikipedia.org/wiki/Lesbian", img: "/images/L.png" },
		{ id: "G", name: "👨‍❤️‍👨 Gay 👬", description: "Men attracted to other men.", wiki: "https://en.wikipedia.org/wiki/Gay", img: "/images/G.png" },
		{ id: "B", name: "🟥 🟪 🟦 Bisexual", description: "People who are attracted to more than one gender.", wiki: "https://en.wikipedia.org/wiki/Bisexuality", img: "/images/B.png" },
		{ id: "T", name: "⚧️ Transgender 🏳️‍⚧️", description: "People with gender identity that differs from the sex they were assigned at birth.", wiki: "https://en.wikipedia.org/wiki/Transgender", img: "/images/T.png" },
		{ id: "Q", name: "🟣 ⚪️ Queer 🟢", description: "⛱️ Umbrella term for people who don’t identify as straight or cisgender.", wiki: "https://en.wikipedia.org/wiki/Queer", img: "/images/Q.png" },
		{ id: "I", name: "💛 Intersex 💜 💛", description: "People who are born with physical traits that don’t fit typical definitions of male or female bodies.", wiki: "https://en.wikipedia.org/wiki/Intersex", img: "/images/I.png" },
		{ id: "A", name: "🙅🏻‍♀️ 🏹 Aromantic / Asexual / Agender ⬛️ 🍰", description: "💚 Aromantic people experience little to no romantic attraction. 💜 Asexual people experience little or no sexual attraction. 🤍 Agender is a gender identity generally defined as in which one lacks a gender or has very little experience of a gender.", wiki: "https://en.wikipedia.org/wiki/Asexuality", img: "/images/A.png" },
		{ id: "+", name: "Plus 🧡💛💚💙💜🤎🖤", description: "Other identities not included in LGBTQIA.", wiki: "https://en.wikipedia.org/wiki/LGBT", img: "/images/plus.png" },
	];

	const handleLetterClick = (letter) => {
		setSelectedLetter(letter);
	};

	return (
		<div className="lgbtqia-wrapper">
			<h2 className="info-title">What Does LGBTQIA+ Stand For?</h2>

			<div className="letters-grid">
				{letters.map((letter) => (
					<div
						key={letter.id}
						className="letter-container"
						onClick={() => handleLetterClick(letter)}
					>
						<img src={letter.img} alt={letter.id} className="letter-image" />
					</div>
				))}
			</div>

			<div className="letter-details-fixed">
				<h5 className="letter-details">{selectedLetter.name}</h5>
				<p className="letter-details">{selectedLetter.description}</p>
				<a
					href={selectedLetter.wiki}
					target="_blank"
					rel="noopener noreferrer"
					className="learn-more-button"
				>
					Learn More
				</a>
			</div>
		</div>
	);
};

export default LGBTQIAExplanation;
