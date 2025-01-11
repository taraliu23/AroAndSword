
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import html2canvas from "html2canvas";

const bingoItems = [
	["at least 2+ letters of LGBTQIA", "still friends with an ex-partner", "“you’re basically straight/gay/other”", "fwb or grindr hookups", "flip-flops on IDing as aro"],
	["made parents sad", "loves being aro", "used to believe everyone’s like this", "autism", "“i want a relationship” *gets into one* “this sucks actually”"],
	["used to identify as bi/pan", "chill with romance", "aro (free space)", "repulsed by romance", "marriage is for financial and legal benefits"],
	["shamed for enjoying sex", "has or wants qpr", "had to awkwardly reject friend", "life goal: live with best friends", "unreasonably sad when friends get into relationships"],
	["it’s easier to say asexual sometimes", "don’t know when you’re being flirted with", "chronically lonely", "romance in fiction is boring", "only aro person in the squad"],
];

export default function Bingo() {
	const [markedCells, setMarkedCells] = useState(
		Array(5)
			.fill(0)
			.map(() => Array(5).fill(false)) // 5x5 grid initialized with `false`
	);
	const [showBingo, setShowBingo] = useState(false); // State to show "Bingo!" animation

	// Toggle the cell between marked and unmarked
	const toggleCell = (rowIndex, colIndex) => {
		const updatedCells = markedCells.map((row, rIdx) =>
			row.map((cell, cIdx) =>
				rIdx === rowIndex && cIdx === colIndex ? !cell : cell
			)
		);
		setMarkedCells(updatedCells);
	};

	// Check for Bingo
	const checkBingo = () => {
		// Check rows, columns, and diagonals
		const rows = markedCells;
		const columns = rows[0].map((_, colIndex) =>
			rows.map((row) => row[colIndex])
		);
		const diagonal1 = rows.map((row, index) => row[index]);
		const diagonal2 = rows.map((row, index) => row[4 - index]);

		// Check if any sequence is fully marked
		const bingo = [...rows, ...columns, diagonal1, diagonal2].some((line) =>
			line.every((cell) => cell)
		);

		if (bingo) {
			setShowBingo(true); // Show Bingo animation
			setTimeout(() => setShowBingo(false), 2000); // Hide after 2 seconds
		}
	};

	useEffect(() => {
		checkBingo(); // Check for Bingo on every update
	}, [markedCells]);

	// Save Bingo as a Picture
	const saveAsPicture = () => {
		const bingoGrid = document.querySelector(".bingo-container");
		html2canvas(bingoGrid).then((canvas) => {
			const link = document.createElement("a");
			link.download = "bingo-result.png";
			link.href = canvas.toDataURL("image/png");
			link.click();
		});
	};

	return (

		<div
			className="bingo-wrapper"
		>
			<h5 className="title"> Aromantic Bingo 🎉</h5>
			<p className="subtitle">
				Click on the squares that resonate with you. Can you get a Bingo?
			</p>
			<Box
				className="bingo-container"
			>
				{bingoItems.flat().map((item, index) => {
					const rowIndex = Math.floor(index / 5);
					const colIndex = index % 5;

					return (
						<Box
							key={index}
							className={`bingo-cell ${markedCells[rowIndex][colIndex] ? "marked" : ""
								}`}
							onClick={() => toggleCell(rowIndex, colIndex)}

						>
							{item}
						</Box>
					);
				})}
			</Box>


			{/* Save as Picture Button */}

			<button className="button is-info save-button" onClick={saveAsPicture}>
				Save as Picture ✅
			</button>

			{/* Bingo Animation */}
			{showBingo && <div className="bingo-animation">🎉 BINGO! 🎉</div>}
		</div>

		// </div >
	);
}


/* // <div className="center-x" style={{ textAlign: "center" }}>

// 	<div className=" center-x">
// 		<hr className="divider" />
// 	</div>

// 	{/* Title and Call-to-Action */
/* // 	<h5 className="subtitle"> Aromantic Bingo 🎉</h5>
	// 	<p className="bingo-subtitle">
	// 		Click on the squares that resonate with you. Can you get a Bingo?
	// 	</p>

	// 	{/* Bingo Grid */
// 	<Box */} */}
// 		className="bingo-container"

// 	>
// 		{bingoItems.flat().map((item, index) => {
// 			const rowIndex = Math.floor(index / 5);
// 			const colIndex = index % 5;

// 			return (
// 				<Box
// 					key={index}
// 					className={`bingo-cell ${markedCells[rowIndex][colIndex] ? "marked" : ""
// 						}`}
// 					onClick={() => toggleCell(rowIndex, colIndex)}

// 				>
// 					{item}
// 				</Box>
// 			);
// 		})}

// 	</Box>


// 	{/* Save as Picture Button */}
// 	<div className="center">
// 		<button className="button is-info" onClick={saveAsPicture}>
// 			Save as Picture ✅
// 		</button>
// 	</div>


// 	{/* Bingo Animation */}
// 	{showBingo && <div className="bingo-animation">🎉 BINGO! 🎉</div>}


// </div>
// 	);
// }
