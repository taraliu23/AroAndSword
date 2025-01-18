'use client';
import React from "react";
import { motion } from "motion/react";

export default function WhatIsAromanticism() {
	return (

		<motion.div
			initial={{ opacity: 0, y: 50 }} // Start hidden and below
			whileInView={{ opacity: 1, y: 0 }} // Slide up into view
			viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
			transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
			className="animated-section"   >
			<div className="section-2">
				<h1 className="info-title">What is Aromanticism?</h1>
				<div className="content-section">
					<div className="image-container">
						<img
							src="images/pic1.png"
							alt="Illustration of Aromanticism"
							className="info-image"
						/>
					</div>
					<div className="text-container">
						{/* <h2 className="info-title">Understanding Aromanticism</h2> */}
						<h6 className="sub-title">In the initialism LGBTQIA+, the A stands for aromanticism, alongside asexuality and agender.</h6>
						<p className="info-text">
							Aromanticism is a romantic orientation characterized by little to no romantic feelings towards to others, and experiencing little or no romantic desire or attraction.
							The opposite of aromanticism is alloromanticism, defined as a romantic orientation in which one experiences romantic love or romantic attraction to others
							Some aromantic individuals may experience romantic attraction but not feel compelled to act on it.
						</p>
						<p>
							In society at large, aromantic people are often stigmatized and stereotyped as being afraid of intimacy, heartless, or deluded.
							Amatonormativity, a neologism coined by philosopher and professor Elizabeth Brake, defined as "the widespread assumption that everyone is better off in an exclusive, romantic, long-term coupled relationship, and that everyone is seeking such a relationship", can be particularly damaging to aromantics. Amatonormativity is said to be connected to devaluing familial, platonic, and queerplatonic friendships/relationships damaging to aromantics.
						</p>

						<a href="https://en.wikipedia.org/wiki/Aromanticism" target="_blank" rel="noopener noreferrer">
							<img
								src="images/learn-more-button.png"
								alt="Learn More"
								className="learn-more-button"
							/>
						</a>
					</div>
				</div>

			</div>
		</motion.div>
	);
}
