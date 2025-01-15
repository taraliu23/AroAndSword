
// import React from "react";
// import { motion } from "motion/react";
// // import TypewriterHero from "TypewriterHero";

// export default function HeroSection() {
// 	return (
// 		<motion.div
// 			className="section"
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{ duration: 0.8 }}
// 		>
// 			<div className="hero-content">
// 				<motion.img
// 					src="/images/icon30.png"
// 					alt="Heart Icon"
// 					className="hero-icon"
// 					loading="lazy"
// 					initial={{ opacity: 0, scale: 0 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{
// 						duration: 0.4,
// 						scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
// 					}}
// 					style="transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 213.92, 0, 1);"

// 				/>
// 				<h1 className="title">🏹 Welcome to the Aromantic Community 💚</h1>
// 				<img src="/images/cat-wink.gif" alt="Aromantic Community" width="80" />
// 				<h4 className="subtitle">
// 					Explore resources, share stories, and connect with others on the
// 					aromantic spectrum.
// 				</h4>

// 				<div className="img-container">
// 					<img
// 						src="./images/hero-image-4.png"
// 						alt="Aromantic Community"
// 						width="400"
// 					/>
// 				</div>
// 			</div>
// 		</motion.div>
// 	);
// }

// import React from "react"
// import { motion } from "framer-motion"
// import TypewriterHero from "./TypewriterHero" // Import the typewriter effect component

// export default function HeroSection() {
// 	return (
// 		<motion.div
// 			className="hero-section"
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{ duration: 0.8 }}
// 		>
// 			<div className="hero-container">
// 				{/* Left Content: Text and Typewriter */}
// 				<div className="hero-text">
// 					<motion.img
// 						src="/images/icon30.png"
// 						alt="Heart Icon"
// 						className="hero-icon"
// 						loading="lazy"
// 						initial={{ opacity: 0, scale: 0 }}
// 						animate={{ opacity: 1, scale: 1 }}
// 						transition={{
// 							duration: 0.6,
// 							type: "spring",
// 							bounce: 0.4,
// 						}}
// 					/>

// 					<h1 className="hero-title">
// 						Welcome to the <span className="highlight">Aromantic Community 💚</span>
// 					</h1>

// 					{/* Add the TypewriterHero Component */}
// 					<div className="hero-typewriter">
// 						<TypewriterHero />
// 					</div>

// 					<p className="hero-subtitle">
// 						Explore resources, share stories, and connect with others on the
// 						aromantic spectrum.
// 					</p>

// 					<div className="cta-buttons">
// 						<motion.a
// 							href="#resources"
// 							className="cta-primary"
// 							whileHover={{ scale: 1.1 }}
// 							whileTap={{ scale: 0.95 }}
// 						>
// 							Explore Resources
// 						</motion.a>
// 						<motion.a
// 							href="#what-is-aromanticism"
// 							className="cta-secondary"
// 							whileHover={{ scale: 1.1 }}
// 							whileTap={{ scale: 0.95 }}
// 						>
// 							Learn More
// 						</motion.a>
// 					</div>
// 				</div>

// 				{/* Right Content: Images */}
// 				<motion.div
// 					className="hero-image"
// 					initial={{ x: 100, opacity: 0 }}
// 					animate={{ x: 0, opacity: 1 }}
// 					transition={{ duration: 0.8 }}
// 				>
// 					<img
// 						src="./images/hero-image-4.png"
// 						alt="Aromantic Community"
// 						className="hero-main-image"
// 					/>
// 					<motion.img
// 						src="/images/cat-wink.gif"
// 						alt="Cat Wink"
// 						className="hero-secondary-image"
// 						initial={{ opacity: 0, y: -30 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.6, duration: 0.5 }}
// 					/>
// 				</motion.div>
// 			</div>
// 		</motion.div>
// 	)
// }
// 'use client'
// import React, { useState } from "react"
// import { motion } from "framer-motion"
// import TypewriterHero from "./TypewriterHero"

// export default function HeroSection() {
// 	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

// 	// Update mouse position
// 	const handleMouseMove = (event) => {
// 		const { clientX, clientY } = event
// 		setMousePosition({ x: clientX, y: clientY })
// 	}

// 	return (
// 		<motion.div
// 			className="hero-section"
// 			initial={{ opacity: 0 }}
// 			animate={{ opacity: 1 }}
// 			transition={{ duration: 0.8 }}
// 			onMouseMove={handleMouseMove} // Track cursor movement
// 		>
// 			<div className="hero-container">
// 				{/* Left Content: Text and Typewriter */}
// 				<div className="hero-text">
// 					<motion.img
// 						src="/images/icon30.png"
// 						alt="Heart Icon"
// 						className="hero-icon"
// 						loading="lazy"
// 						initial={{ opacity: 0, scale: 0 }}
// 						animate={{ opacity: 1, scale: 1 }}
// 						transition={{
// 							duration: 0.6,
// 							type: "spring",
// 							bounce: 0.4,
// 						}}
// 					/>

// 					<h1 className="hero-title">
// 						Welcome to the <span className="highlight">Aromantic Community 💚</span>
// 					</h1>

// 					{/* Add Typewriter Effect */}
// 					<div className="hero-typewriter">
// 						<TypewriterHero />
// 					</div>

// 					<p className="hero-subtitle">
// 						Explore resources, share stories, and connect with others on the
// 						aromantic spectrum.
// 					</p>

// 					<div className="cta-buttons">
// 						<motion.a
// 							href="#resources"
// 							className="cta-primary"
// 							whileHover={{ scale: 1.1 }}
// 							whileTap={{ scale: 0.95 }}
// 						>
// 							Explore Resources
// 						</motion.a>
// 						<motion.a
// 							href="#what-is-aromanticism"
// 							className="cta-secondary"
// 							whileHover={{ scale: 1.1 }}
// 							whileTap={{ scale: 0.95 }}
// 						>
// 							Learn More
// 						</motion.a>
// 					</div>
// 				</div>

// 				{/* Right Content: Hero Images */}
// 				<motion.div
// 					className="hero-image"
// 					initial={{ x: 100, opacity: 0 }}
// 					animate={{ x: 0, opacity: 1 }}
// 					transition={{ duration: 0.8 }}
// 				>
// 					<img
// 						src="./images/hero-image-4.png"
// 						alt="Aromantic Community"
// 						className="hero-main-image"
// 					/>
// 					<motion.img
// 						src="/images/cat-wink.gif"
// 						alt="Cat Wink"
// 						className="hero-secondary-image"
// 						initial={{ opacity: 0, y: -30 }}
// 						animate={{ opacity: 1, y: 0 }}
// 						transition={{ delay: 0.6, duration: 0.5 }}
// 					/>
// 				</motion.div>
// 			</div>

// 			{/* Floating Images */}
// 			<motion.img
// 				src="/images/float1.png"
// 				alt="Floating Image 1"
// 				className="floating-image floating-image-1"
// 				style={{
// 					x: mousePosition.x / 20,
// 					y: mousePosition.y / 20,
// 				}}
// 				initial={{ opacity: 0, scale: 0 }}
// 				animate={{ opacity: 1, scale: 1 }}
// 				transition={{ duration: 0.6 }}
// 			/>

// 			<motion.img
// 				src="/images/float2.png"
// 				alt="Floating Image 2"
// 				className="floating-image floating-image-2"
// 				style={{
// 					x: -mousePosition.x / 25,
// 					y: -mousePosition.y / 25,
// 				}}
// 				initial={{ opacity: 0, scale: 0 }}
// 				animate={{ opacity: 1, scale: 1 }}
// 				transition={{ duration: 0.6 }}
// 			/>

// 			<motion.img
// 				src="/images/float3.png"
// 				alt="Floating Image 3"
// 				className="floating-image floating-image-3"
// 				style={{
// 					x: mousePosition.x / 30,
// 					y: -mousePosition.y / 30,
// 				}}
// 				initial={{ opacity: 0, scale: 0 }}
// 				animate={{ opacity: 1, scale: 1 }}
// 				transition={{ duration: 0.6 }}
// 			/>
// 		</motion.div>
// 	)
// }

// import React from "react"
// import { motion } from "framer-motion"

// export default function HeroSection() {
// 	return (
// 		<div className="hero-section">
// 			<motion.div
// 				className="hero-content"
// 				initial={{ opacity: 0, y: 20 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 1 }}
// 			>
// 				{/* Decorative Background Text */}
// 				<div className="hero-background-text">Art</div>

// 				{/* Main Hero Text */}
// 				<h1 className="hero-title">
// 					Welcome to the <span className="highlight">playground</span> of
// 				</h1>

// 				<h1 className="hero-title-large">Aromantic Community 💚</h1>

// 				{/* Supporting Subtitle */}
// 				<p className="hero-subtitle">
// 					Explore stories, share connections, and discover resources on the aromantic spectrum.
// 				</p>

// 				{/* Decorative Floating Icon */}
// 				<motion.img
// 					src="/images/float1.png"
// 					alt="Smile Icon"
// 					className="floating-icon"
// 					initial={{ rotate: 0 }}
// 					animate={{ rotate: 360 }}
// 					transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
// 				/>

// 				{/* Small Decorative Elements */}
// 				<div className="decorative-line"></div>
// 				<div className="decorative-circle"></div>
// 			</motion.div>
// 		</div>
// 	)
// }
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
				{/* Add the Typewriter Effect */}
				<div className="hero-typewriter">
					<TypewriterHero />
				</div>
				{/* Decorative Background Text */}
				<div className="hero-background-text">Aromantic Community</div>

				{/* Main Hero Text */}
				<h1 className="hero-title">
					Welcome to the <span className="highlight">playground</span> of
				</h1>


				<h1 className="hero-title-large">Aromantic Community 💚</h1>

				{/* Supporting Subtitle */}
				<p className="hero-subtitle">
					Explore stories, share connections, and discover resources on the aromantic spectrum.
				</p>

				{/* Call-to-Action Buttons */}
				<div className="cta-buttons">
					<motion.a
						href="#resources"
						className="cta-primary"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						Explore Resources
					</motion.a>
					<motion.a
						href="#learn-more"
						className="cta-secondary"
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
					>
						Learn More
					</motion.a>
				</div>

				{/* Decorative Floating Icon */}
				<motion.img
					src="/images/float1.png"
					alt="Smile Icon"
					className="floating-icon"
					initial={{ rotate: 0 }}
					animate={{ rotate: 360 }}
					transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
				/>

				{/* Small Decorative Elements */}
				<div className="decorative-line"></div>
				<div className="decorative-circle"></div>
			</motion.div>
		</div>
	)
}
