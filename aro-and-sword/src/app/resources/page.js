
'use client';
import React from "react";
import Navbar from '../components/Navbar'; // Import your Navbar component
import Footer from '../components/Footer'; // Optional Footer for consistency
import Resources from "../components/Resources";


export default function ResourcesPage() {
	return (
		<div className="app">
			<Navbar /> {/* Add a Navbar for navigation */}
			<main className="bingo-page">
				{/* <h1 className="page-title">Aromantic Bingo</h1>
				<p className="page-subtitle">
					Click on the squares that resonate with you. Can you get a Bingo?
				</p> */}
				<Resources /> {/* Render the Bingo component */}
			</main>
		</div>
	);
}
