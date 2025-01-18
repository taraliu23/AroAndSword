'use client';
import React from "react";

export default function SplitAttractionModel() {
	return (
		<div className="section-2 ">
			<h1 className="info-title">Split Attraction Model</h1>
			<div className="content-section reverse-layout">
				<div className="text-container">
					{/* <h2 className="subtitle">What is the Split Attraction Model?</h2> */}
					<p>
						The Split Attraction Model (SAM) is a way of understanding that attraction can be divided into
						different types, such as romantic, sexual, aesthetic, sensual, and platonic attraction.
					</p>
					<p>
						This model is especially helpful for people who identify as aromantic, asexual, or on other parts
						of the asexual or aromantic spectrum, as it allows them to better describe their unique experiences
						with attraction.
					</p>
					<p>
						For example, someone might feel strong sexual attraction to others but experience no romantic attraction,
						or vice versa. By splitting these concepts, SAM provides more nuanced ways to express and understand human
						attraction.
					</p>
					<a href="https://www.youtube.com/watch?v=6mjWPAhPGnk">
						<img
							src="images/learn-more-button.png"
							alt="Learn More"
							className="learn-more-button"
						/>
					</a>
				</div>
				<div className="image-container">
					<img
						src="/images/sam-model2.png"
						alt="Split Attraction Model"
						className="info-image"
					/>
				</div>

			</div>
		</div>
	);
}
