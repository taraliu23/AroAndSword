
'use client';
import React from "react";
import { linkPreview } from "tb-link-preview";

linkPreview();

export default function Resources() {
	return (
		<div className="section-2">
			<h1 className="info-title">Resources & Friendly Links</h1>
			<div className="content-section reverse-layout">
				<div className="text-container">
					<p>
						Here are some resources and friendly links to help you learn more about aromanticism and related topics.
					</p>
					<p>
						Feel free to explore and share these resources with others who might benefit from them. Knowledge is a step toward understanding and acceptance!
					</p>

					<div className="resources-list">
						<h6 className="sub-title-inline">📻 Podcast 🎵</h6>
						<ul>
							<li>
								<a className="link-inline"
									href="https://www.soundsfakepod.com/resource"
									target="_blank"
									rel="noopener noreferrer"
								>
									Sounds Fake But Okay
								</a>
							</li>
						</ul>

						<h6 className="sub-title-inline">📂 Organization 🗄️</h6>
						<ul>
							<li>
								<a className="link-inline"
									href="https://taaap.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									The Ace and Aro Advocacy Project (TAAAP)
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.facebook.com/groups/3897401743650465"
									target="_blank"
									rel="noopener noreferrer"
								>
									Asian Network of ACE Queer Activists Facebook Group
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://carnivalofaros.wordpress.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									A Carnival of Aros
								</a>
							</li>
						</ul>

						<h6 className="sub-title-inline">📓 Books & Education 📗</h6>
						<ul>
							<li>
								<a className="link-inline"
									href="https://www.goodreads.com/book/show/128076214-hopeless-aromantic"
									target="_blank"
									rel="noopener noreferrer"
								>
									Hopeless Aromantic: An Affirmative Guide to Aromanticism
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.goodreads.com/book/show/121245340-amazing-ace-awesome-aro"
									target="_blank"
									rel="noopener noreferrer"
								>
									Amazing Ace, Awesome Aro: An Illustrated Exploration
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://acedadadvice.com/the-ace-and-aro-relationship-guide"
									target="_blank"
									rel="noopener noreferrer"
								>
									The Ace And Aro Relationship Guide: Making It Work In Friendships, Love And Sex

								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.goodreads.com/book/show/51563160-common-bonds"
									target="_blank"
									rel="noopener noreferrer"
								>
									Common Bonds: an Aromantic Speculative Anthology
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.aroacedatabase.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									AroAce Database - AroAce Characters in Media
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://aro-ace.carrd.co/"
									target="_blank"
									rel="noopener noreferrer"
								>
									AroAce Cards
								</a>
							</li>
						</ul>

						<h6 className="sub-title-inline">👭 Forums 👭</h6>
						<ul>
							<li>
								<a className="link-inline"
									href="https://www.arocalypse.com/forums/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Arocalypse
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.aromanticism.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Aromantic-spectrum Union for Recognition, Education, and Advocacy (AUREA)
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.reddit.com/r/aromantic/"
									target="_blank"
									rel="noopener noreferrer"
								>
									r/aromantic
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.reddit.com/r/aaaaaaaarrrrro/"
									target="_blank"
									rel="noopener noreferrer"
								>
									r/aaaaaaaarrrrro
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.reddit.com/r/AroAceMemes/"
									target="_blank"
									rel="noopener noreferrer"
								>
									r/AroAceMemes
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.reddit.com/r/aromanticasexual/"
									target="_blank"
									rel="noopener noreferrer"
								>
									r/aromanticasexual
								</a>
							</li>
							<li>
								<a className="link-inline"
									href="https://www.reddit.com/r/AskAromantics/"
									target="_blank"
									rel="noopener noreferrer"
								>
									r/AskAromantics
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Image Container */}
				<div className="image-container">
					<img
						src="/images/resources.png"
						alt="Friendly Links and Resources"
						className="info-image"
					/>
				</div>
			</div>
		</div>
	);
}
