
import React from "react";
import { motion } from "motion/react";
// import TypewriterHero from "TypewriterHero";

export default function HeroSection() {
	return (
		<motion.div
			className="section"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<div className="hero-content">
				<motion.img
					src="/images/icon30.png"
					alt="Heart Icon"
					className="hero-icon"
					loading="lazy"
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.4,
						scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
					}}
					style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 213.92, 0, 1);"

				/>
				<h1 className="title">🏹 Welcome to the Aromantic Community 💚</h1>
				<img src="/images/cat-wink.gif" alt="Aromantic Community" width="80" />
				<h4 className="subtitle">
					Explore resources, share stories, and connect with others on the
					aromantic spectrum.
				</h4>

				<div className="img-container">
					<img
						src="./images/hero-image-4.png"
						alt="Aromantic Community"
						width="400"
					/>
				</div>
			</div>
		</motion.div>
	);
}

