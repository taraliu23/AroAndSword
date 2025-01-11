'use client';
import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Bingo from "./components/Bingo";

export default function HomePage() {
	const [darkMode, setDarkMode] = useState(false);

	const toggleTheme = () => {
		setDarkMode((prevMode) => !prevMode);
		document.body.classList.toggle("dark-mode", !darkMode);
	};

	return (
		<div className={`app ${darkMode ? "dark-mode" : ""}`}>
			{/* Navbar */}
			{/* <Navbar toggleTheme={toggleTheme} darkMode={darkMode} /> */}

			<HeroSection />
			<Bingo />

		</div>
	);
}

{/* </div>
			<div className="row center-x space-y-5"> */}

{/* <section className="column center-x space-y-5"> */ }


{/* </section> */ }

{/* <section class="about" id="My Projects">
				<div class="content">
					<div class="title">
						<span>Courses</span>
					</div>
					<div class="boxes">
						<div class="box">
							<div class="topic">
								<a href="" target="_blank">
									DSA
								</a>
							</div>
							<p>
								The term DSA stands for Data
								Structures and Algorithms. As
								the name itself suggests, it
								is a combination of two
								separate yet interrelated
								topics.
							</p>
						</div>
						<div class="box">

							<div class="topic">
								<a href="" target="_blank">
									HTML
								</a>
							</div>
							<p>
								HTML stands for HyperText
								Markup Language. It is used
								to design web pages using
								the markup language.
							</p>
						</div>

						<div class="box">
							<div class="topic">
								<a href="" target="_blank">
									Javascript
								</a>
							</div>
							<p>
								JavaScript (JS) is the most
								popular lightweight, interpreted
								compiled programming language.
							</p>
						</div>
					</div>
				</div>
			</section> */}

{/* Information Sections */ }
{/* <InfoSection
				title="What's Aromanticism?"
				description="Learn more about aromanticism and what it means to be on the aromantic spectrum. Understand the unique experiences and perspectives of aromantic individuals."
				image="/images/pic1.png"
				link="/what-is-aromanticism"
			/> */}
{/* <InfoSection
				title="Dos and Don'ts"
				description="Understand how to interact respectfully with the aromantic community. Learn about supportive communication and inclusive practices."
				image="/images/dos-donts-8.png"
				link="/dos-and-donts"
			/>
			<InfoSection
				title="Your Story Matters"
				description="Share your experiences or read inspiring stories from others in the aromantic community. Every narrative contributes to understanding and visibility."
				image="/images/your-story-4.png"
				link="/your-story"
			/> */}

{/* Bingo Section */ }
{/* <div className="row center-x space-y-5">

				<Bingo />
			</div> */}

// 		</div >
// 	);
// }
