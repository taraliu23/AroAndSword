
'use client';
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import html2canvas from "html2canvas";
import Select from "react-select";

// All Bingo Item Lists
const bingoLists = {
	"Aromantic Bingo": [
		["at least 2+ letters of LGBTQIA", "still friends with an ex-partner", "“you’re basically straight/gay/other”", "fwb or grindr hookups", "flip-flops on IDing as aro"],
		["made parents sad", "loves being aro", "used to believe everyone’s like this", "autism", "“i want a relationship” *gets into one* “this sucks actually”"],
		["used to identify as bi/pan", "chill with romance", "aro (free space)", "repulsed by romance", "marriage is for financial and legal benefits"],
		["shamed for enjoying sex", "has or wants qpr", "had to awkwardly reject friend", "life goal: live with best friends", "unreasonably sad when friends get into relationships"],
		["it’s easier to say asexual sometimes", "don’t know when you’re being flirted with", "chronically lonely", "romance in fiction is boring", "only aro person in the squad"],
	],
	"Aromantic Experiences Bingo": [
		["You felt like you were broken or immature because society was pressuring you to seek out romantic relationships", "You have mistaken other types of attraction for romantic attraction", "You love 'love' as a concept, but you've never fallen in love", "You feel very uncomfortable when someone tells you they're in love or have a crush on you", "You regularly question if you're actually aromantic"],
		["'No, I'm not hiding a secret relationship. This is me, an unseasoned romantic expression, and I'm not lowkey fine.'", "You enjoy romantic stories or certain romantic things in fiction, but you don't desire them in real life / They don't seem very appealing / You can't really relate", "'That moment in 'f***, marry, kill' where you realize you find it easier to decide who to kill than who to marry'", "You don't like the emphasis that is put on 'and still being able to love' and 'the value of love' as a life goal", "You don't like that people often assume aros are also ace and vice versa"],
		["You enjoy flirting (as a fun conversation or for sexual reasons), but normally don't have intentions for it to lead to dating and romantic relationships", "Traditionally romantic actions don't come naturally to you / Those actions may not feel emotionally impactful or like a script to act out", "Aromantic Experiences Bingo (Free Space)", "You prefer non-romantic relationships (IRL and media) / It's often rather disappointing when they turn out to be 'in love'", "You have felt romantic attraction, but it occurred rarely or under specific circumstances (e.g., grey-aro spectrum, demiromantic...)"],
		["While looking for a canonically aro-allo character, you have stared into the void", "Usually when listening to romantic love songs, no one in particular comes to your mind", "You didn't understand why people who get friendzoned can't stay friends / What's there to 'get over' first?", "'You didn't realize 'romantic attraction' is an actual feeling that's different from 'strong platonic love''", "You thought romantic relationships just meant being best friends + physical and emotional intimacy (~basically a QPR)"],
		["You tried dating someone because you felt 'meh' about it, but went 'NOPE' when it felt like they thought your 'not having feelings' was not 'loving them enough'", "'You 'decided' to have a crush on someone, or randomly chose someone when asked who you liked'", "Designated relationships don't feel very different to friendships (your best tips: 'Communicate!' and 'Break up!')", "You can't comprehend all the stupid, and sometimes downright evil, things people do in the name of love", "You don't like the concept of 'friends dropping to less importance and value the moment you find romantic love'"]
	],
	"Aro-Allo Experiences Bingo": [
		// Add the items here as in the previous examples
	],
	"Aro Bingo": [
		// Add the items here as in the previous examples
	],
};

export default function Bingo() {
	const [currentBingo, setCurrentBingo] = useState("Aromantic Bingo"); // Default selection
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

	// Options for React Select
	const options = Object.keys(bingoLists).map((key) => ({
		value: key,
		label: key,
	}));

	return (
		<div className="bingo-wrapper">
			<h5 className="info-title">{currentBingo} 🎉</h5>
			<p className="sub-title">
				Click on the squares that resonate with you. Can you get a Bingo?
			</p>

			{/* React Select Dropdown */}
			<Select className="bingo-select"
				options={options}
				defaultValue={options[0]} // Set default value
				onChange={(selectedOption) => {
					setCurrentBingo(selectedOption.value); // Update current Bingo
					setMarkedCells(Array(5).fill(0).map(() => Array(5).fill(false))); // Reset marked cells
				}}

			/>

			<Box className="bingo-container">
				{bingoLists[currentBingo].flat().map((item, index) => {
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
			{showBingo && <div className="bingo-animation">🎉 <img className="bingo-cat" src='images/bingo.png'></img></div>}
		</div>
	);
}
