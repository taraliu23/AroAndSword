'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LETTER_DELAY = 0.1; // Slower typing effect
const BOX_FADE_DURATION = 0.1; // Cursor effect
const FADE_DELAY = 1.5; // Quicker transition between words
const SWAP_DELAY_IN_MS = 2500; // Faster word swapping

const TypewriteEffect = ({ staticText, dynamicWords }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
		}, SWAP_DELAY_IN_MS);

		return () => clearInterval(intervalId);
	}, [dynamicWords]);

	return (
		<p className="typewriter-text">
			<span>{staticText}</span>{" "}
			<span className="dynamic-text">
				{dynamicWords[currentIndex].split("").map((char, index) => (
					<motion.span
						key={`${currentIndex}-${index}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{
							delay: index * LETTER_DELAY, // Slower typing
							duration: 0,
						}}
						className="relative"
					>
						{char}
						<motion.span
							className="cursor-box"
							initial={{ opacity: 0 }}
							animate={{ opacity: [0, 1, 0] }}
							transition={{
								delay: index * LETTER_DELAY,
								duration: BOX_FADE_DURATION,
								ease: "easeInOut",
							}}
						/>
					</motion.span>
				))}
			</span>{" "}

			&nbsp;friend!
		</p>
	);
};

export default function TypewriterHero() {
	return (
		<div className="hero-typewriter">
			<TypewriteEffect
				staticText="Hello, my"
				dynamicWords={["aro", "aroace", "ace", "queer", "stranger on the internet"]}
			/>
		</div>
	);
}
