'use client';
import React, { useState } from "react";
import { useRef } from "react";
// import Navbar from "../components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Bingo from "./components/Bingo";
import WhatIsAromanticism from "./pages/what-is-aromanticism";
import Resources from "./components/Resources";
import TypewriterHero from "./components/TypewriterHero";
// import ThemeSwitcher from "./components/ThemeSwitcher";
import SplitAttractionModel from "./pages/sam-model";
import Navbar from "./components/Navbar";
import PostItCard from "./components/PostItCard";
import LGBTQIAExplanation from "./components/LGBTQIAExplanation";

export default function HomePage() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode((prevMode) => !prevMode);
		document.body.classList.toggle("dark-mode", !darkMode);
	};

	const heroRef = useRef(null);
	const footerRef = useRef(null);

	// Visibility handler for the note in the hero section
	const isInHeroSection = () => {
		if (!heroRef.current) { return false };
		const rect = heroRef.current.getBoundingClientRect();
		return rect.bottom > 0 && rect.top < window.innerHeight; // Is visible in the viewport
	};

	// Visibility handler for the note above the footer
	const isAboveFooter = () => {
		if (!footerRef.current) { return false };
		const rect = footerRef.current.getBoundingClientRect();
		return rect.top < window.innerHeight && rect.bottom > 0; // Is visible in the viewport
	};

	return (
		<div className={`app ${darkMode ? "dark-mode" : ""}`}>

			<Navbar />
			{/* <Navbar toggleTheme={toggleTheme} darkMode={darkMode} /> */}

			{/* <HeroSection />
			 */}
			<div ref={heroRef}>
				<HeroSection />
			</div>

			{/* <TypewriterHero /> */}
			<LGBTQIAExplanation />
			{/* <Bingo /> */}

			<PostItCard positionClass="top-left" imgSrc="/images/note2.png" visibilityHandler={isInHeroSection} uniqueClass="note-hero" />

			<WhatIsAromanticism />
			<SplitAttractionModel />
			{/* <Resources /> */}
			{/* Resources Section (Footer Reference) */}
			<div ref={footerRef}>
				<Resources />
			</div>
			<PostItCard positionClass="bottom-right" imgSrc="/images/note.png" visibilityHandler={isAboveFooter} uniqueClass="note-footer" />


		</div>
	);
}
