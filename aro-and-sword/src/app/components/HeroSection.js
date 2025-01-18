
import React from "react"
import { motion } from "framer-motion"
import TypewriterHero from "./TypewriterHero" // Import the typewriter effect

export default function HeroSection() {
	return (
		<div className="hero-section">
			<motion.div
				className="hero-content"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				<motion.img
					src="/images/float1.png"
					alt="Smile Icon"
					className="floating-icon"
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
				/>
				<div className="hero-typewriter">
					<TypewriterHero />
				</div>
				{/* <div className="hero-background-text">Aromantic Community</div> */}
				<div className="decorative-line"></div>
				<h1 className="hero-title">
					Welcome to the <span className="highlight">playground</span> of
				</h1>


				<h1 className="hero-title-large">🏳️‍🌈 Aromantic Community 💚</h1>

				<p className="hero-subtitle">
					Explore stories, share connections, and discover resources on the aromantic spectrum.
				</p>

				<div className="cta-buttons">
					<motion.a
						href="/resources"
						className="cta-primary"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						Explore Resources
					</motion.a>
					<motion.a
						href="/learn-more"
						className="cta-secondary"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						Learn More
					</motion.a>
				</div>
				{/* <a href="/bingo" className="cta-primary">
					Play Aromantic Bingo
				</a> */}

				{/* <div className="decorative-line"></div> */}
				<div className="decorative-circle"></div>
			</motion.div>
		</div>
	)
}
