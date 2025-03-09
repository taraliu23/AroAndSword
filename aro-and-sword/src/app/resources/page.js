
'use client';
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Resources from "../components/Resources";


export default function ResourcesPage() {
	return (
		<div className="app">
			<Navbar />
			<main className="bingo-page">
				<Resources />
			</main>
		</div>
	);
}
