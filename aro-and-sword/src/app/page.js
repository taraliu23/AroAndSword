'use client';
import React, { useState } from "react";
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

	return (
		<div className={`app ${darkMode ? "dark-mode" : ""}`}>

			<Navbar />
			{/* <Navbar toggleTheme={toggleTheme} darkMode={darkMode} /> */}

			<HeroSection />
			{/* <TypewriterHero /> */}
			<LGBTQIAExplanation />
			<Bingo />
			<WhatIsAromanticism />
			<SplitAttractionModel />
			<Resources />
			<PostItCard />

		</div>
	);
}
