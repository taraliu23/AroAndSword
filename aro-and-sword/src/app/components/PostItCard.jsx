import React, { useState } from "react";

const PostItCard = () => {
	const [isRevealed, setIsRevealed] = useState(false); // Toggle full view

	const handleClick = () => {
		setIsRevealed((prev) => !prev); // Toggle between minimized and full-screen
	};

	return (
		<div
			className={`post-it-wrapper ${isRevealed ? "revealed" : ""}`}
			onClick={handleClick}
		>
			<img src="/images/note.png" alt="Post-It Note" className="post-it-image" />
		</div>
	);
};

export default PostItCard;
