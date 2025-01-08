import React, { useState } from "react";

export default function Bingo() {
	const [bingo, setBingo] = useState(Array(5).fill().map(() => Array(5).fill(false))); // 5x5 grid of false (unmarked)

	const bingoItems = [

		["at least 2+ letters of LGBTQIA", "still friends with an ex-partner", "“you’re basically straight/gay/other”", "fwb or grindr hookups", "flip-flops on IDing as aro"],
		["made parents sad", "loves being aro", "used to believe everyone’s like this", "autism", "“i want a relationship” *gets into one* “this sucks actually”"],
		["used to identify as bi/pan", "chill with romance", "aro (free space)", "repulsed by romance", "marriage is for financial and legal benefits"],
		["shamed for enjoying sex", "has or wants qpr", "had to awkwardly reject friend", "life goal: live with best friends", "unreasonably sad when friends get into relationships"],
		["it’s easier to say asexual sometimes", "don’t know when you’re being flirted with", "chronically lonely", "romance in fiction is boring", "only aro person in the squad"]
	];

	const toggleCell = (rowIndex, colIndex) => {
		const newBingo = bingo.map((row, rIdx) =>
			row.map((cell, cIdx) => (rIdx === rowIndex && cIdx === colIndex ? !cell : cell))
		);
		setBingo(newBingo);
	};

	return (
		<div className="bingo-container">
			<h2 className="mb-4">Aromantic Bingo</h2>
			<div className="bingo-grid">
				{bingoItems.map((row, rowIndex) => (
					<div key={rowIndex} className="bingo-row">
						{row.map((item, colIndex) => (
							<div
								key={colIndex}
								className={`bingo-cell ${bingo[rowIndex][colIndex] ? "marked" : ""}`}
								onClick={() => toggleCell(rowIndex, colIndex)}
							>
								{item}
							</div>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
