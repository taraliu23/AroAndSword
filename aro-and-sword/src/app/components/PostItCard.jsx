
// const PostItCard = ({ positionClass, imgSrc }) => {
// 	const [isRevealed, setIsRevealed] = useState(false); // Toggle full view

// 	const handleClick = () => {
// 		setIsRevealed((prev) => !prev);
// 	};


// 	return (
// 		<div
// 			// className={`post-it-wrapper ${isRevealed ? "revealed" : ""}`}
// 			className={`post-it-wrapper ${positionClass} ${isRevealed ? "revealed" : ""}`}
// 			onClick={handleClick}
// 		>
// 			{/* <img src="/images/note.png" alt="Post-It Note" className="post-it-image" /> */}
// 			<img src={imgSrc} alt="Post-It Note" className="post-it-image" />
// 		</div>
// 	);
// };

// export default PostItCard;


// const PostItCard = ({ positionClass, imgSrc, visibilityHandler }) => {
// 	const [isRevealed, setIsRevealed] = useState(false); // Toggle full view
// 	const [isVisible, setIsVisible] = useState(true); // Control visibility

// 	useEffect(() => {
// 		if (visibilityHandler) {
// 			const handleVisibility = () => {
// 				const shouldShow = visibilityHandler();
// 				setIsVisible(shouldShow);
// 			};

// 			window.addEventListener("scroll", handleVisibility);
// 			handleVisibility();

// 			return () => window.removeEventListener("scroll", handleVisibility);
// 		}
// 	}, [visibilityHandler]);

// 	const handleClick = () => {
// 		setIsRevealed((prev) => !prev);
// 	};

// 	if (!isVisible) return null; // Don't render if not visible

// 	return (
// 		<div
// 			className={`post-it-wrapper ${positionClass} ${isRevealed ? "revealed" : ""}`}
// 			onClick={handleClick}
// 		>
// 			<img src={imgSrc} alt="Post-It Note" className="post-it-image" />
// 		</div>
// 	);
// };

// export default PostItCard;

import React, { useState } from "react";

const PostItCard = ({ positionClass, imgSrc, visibilityHandler, uniqueClass }) => {
	const [isRevealed, setIsRevealed] = useState(false); // Toggle full view
	const [isVisible, setIsVisible] = useState(true); // Control visibility

	React.useEffect(() => {
		if (visibilityHandler) {
			const handleVisibility = () => {
				const shouldShow = visibilityHandler();
				setIsVisible(shouldShow);
			};

			window.addEventListener("scroll", handleVisibility);
			handleVisibility();

			return () => window.removeEventListener("scroll", handleVisibility);
		}
	}, [visibilityHandler]);

	const handleClick = () => {
		setIsRevealed((prev) => !prev);
	};

	if (!isVisible) { return null }; // Don't render if not visible

	return (
		<div
			className={`post-it-wrapper ${positionClass} ${isRevealed ? `revealed ${uniqueClass}` : ""}`}
			onClick={handleClick}
		>
			<img src={imgSrc} alt="Post-It Note" className="post-it-image" />
		</div>
	);
};

export default PostItCard;
