
import React, { useState } from "react";

const LGBTQIAExplanation = () => {
	const [selectedLetter, setSelectedLetter] = useState({
		name: "🙅🏻‍♀️ 🏹 Aromantic / Asexual / Agender ⬛️ 🍰",
		description: "💚 Aromantic people experience little to no romantic attraction.",
		wiki: "https://en.wikipedia.org/wiki/Aromanticism",
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
			<div className="sub-title">
				Click on a letter to learn more about the identity it represents!
			</div>
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
