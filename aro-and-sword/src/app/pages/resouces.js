// 'use client';
// import React from "react";
// import ImageList from '@mui/material/ImageList';



// export default function Resources() {
// 	return (
// 		<div className="section-2">
// 			<h1 className="title">Resources & Friendly Links</h1>
// 			<div className="content-section reverse-layout">
// 				<div className="text-container">
// 					<h2 className="subtitle">Explore More</h2>
// 					<p>
// 						Here are some resources and friendly links to help you learn more about aromanticism and related topics.
// 					</p>
// 					<p>
// 						Feel free to explore and share these resources with others who might benefit from them. Knowledge is a step toward understanding and acceptance!
// 					</p>
// 					{/* <ol role="list" className="list with-rainbows"> */}
// 					<h6 className="subtitle small-head">Podcast</h6>
// 					<a href="https://www.soundsfakepod.com/resource"
// 						target="_blank" rel="noopener noreferrer">Sounds Fake But Okay Podcast</a>

// 					<h6 className="subtitle small-head">Orgnization</h6>
// 					<a href="https://taaap.org/"
// 						target="_blank" rel="noopener noreferrer">The Ace and Aro Advocacy Project (TAAAP)</a>
// 					<h6 className="subtitle small-head">Books</h6>
// 					<a href="https://www.goodreads.com/book/show/128076214-hopeless-aromantic"
// 						target="_blank" rel="noopener noreferrer"> Hopeless Aromantic: An Affirmative Guide to Aromanticism</a>
// 					<a href="https://www.goodreads.com/book/show/121245340-amazing-ace-awesome-aro"
// 						target="_blank" rel="noopener noreferrer"> Amazing Ace, Awesome Aro: An Illustrated Exploration</a>

// 					<h6 className="subtitle small-head">Forums</h6>
// 					<a href="https://www.arocalypse.com/forums/"
// 						target="_blank" rel="noopener noreferrer">Arocalypse</a>
// 					<a href="https://www.aromanticism.org/"
// 						target="_blank" rel="noopener noreferrer"> Aromantic-spectrum Union for Recognition, Education, and Advocacy (AUREA)</a>
// 					<a href="https://www.reddit.com/r/aromantic/"
// 						target="_blank" rel="Subreddit r/aromantic"> Subreddit r/aromantic</a>

// 				</div>
// 				<div className="image-container">
// 					<img
// 						src="/images/resources.png"
// 						alt="Friendly Links and Resources"
// 						className="info-image"
// 					/>
// 					{/* <table className="table with-leaves">
// 						<tr>
// 							<th>Event</th>
// 							<th>Date</th>
// 						</tr>
// 						<tr>
// 							<td>Aromantic Spectrum Awareness Week (ASAW)</td>
// 							<td>First week after Valentine's Day)</td>
// 						</tr>
// 						<tr>
// 							<td>Aromantic Visibility Day</td>
// 							<td>June 5th (since 2023) </td>
// 						</tr>
// 						<tr>
// 							<td>International Asexuality Day</td>
// 							<td>6 April (since 2021)</td>
// 						</tr>


// 						<tr>
// 							<td>Ace Week</td>
// 							<td>Last full week in October (since 2020)</td>
// 						</tr>

// 						<tr>
// 							<td>International Day Against Homophobia, Biphobia and Transphobia(IDAHOBIT)</td>
// 							<td>May 17(since 2005)</td>
// 						</tr>

// 						<tr>
// 							<td>Non-Binary People's Day</td>
// 							<td>July 14(since 2012)</td>
// 						</tr>

// 						<tr>
// 							<td>Zero Discrimination Day</td>
// 							<td>March 1(since 2014)</td>
// 						</tr>
// 					</table> */}

// 				</div>



// 			</div>

// 		</div >
// 	);
// }

'use client';
import React from "react";

export default function Resources() {
	return (
		<div className="section-2">
			<h1 className="title">Resources & Friendly Links</h1>
			<div className="content-section reverse-layout">
				{/* Text Container */}
				<div className="text-container">
					<h2 className="subtitle">Explore More</h2>
					<p>
						Here are some resources and friendly links to help you learn more about aromanticism and related topics.
					</p>
					<p>
						Feel free to explore and share these resources with others who might benefit from them. Knowledge is a step toward understanding and acceptance!
					</p>

					{/* Grouped Resources */}
					<div className="resources-list">
						<h6 className="subtitle small-head">📻 Podcast 🎵</h6>
						<ul>
							<li>
								<a
									href="https://www.soundsfakepod.com/resource"
									target="_blank"
									rel="noopener noreferrer"
								>
									Sounds Fake But Okay
								</a>
							</li>
						</ul>

						<h6 className="subtitle small-head">📂 Organization 🗄️</h6>
						<ul>
							<li>
								<a
									href="https://taaap.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									The Ace and Aro Advocacy Project (TAAAP)
								</a>
							</li>
						</ul>

						<h6 className="subtitle small-head">📓 Books 📗</h6>
						<ul>
							<li>
								<a
									href="https://www.goodreads.com/book/show/128076214-hopeless-aromantic"
									target="_blank"
									rel="noopener noreferrer"
								>
									Hopeless Aromantic: An Affirmative Guide to Aromanticism
								</a>
							</li>
							<li>
								<a
									href="https://www.goodreads.com/book/show/121245340-amazing-ace-awesome-aro"
									target="_blank"
									rel="noopener noreferrer"
								>
									Amazing Ace, Awesome Aro: An Illustrated Exploration
								</a>
							</li>
						</ul>

						<h6 className="subtitle small-head">👭 Forums 👭</h6>
						<ul>
							<li>
								<a
									href="https://www.arocalypse.com/forums/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Arocalypse
								</a>
							</li>
							<li>
								<a
									href="https://www.aromanticism.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Aromantic-spectrum Union for Recognition, Education, and Advocacy (AUREA)
								</a>
							</li>
							<li>
								<a
									href="https://www.reddit.com/r/aromantic/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Subreddit r/aromantic
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
