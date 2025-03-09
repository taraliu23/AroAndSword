
'use client';
import React from "react";
import Navbar from '../components/Navbar'; // Import your Navbar component
import Footer from '../components/Footer'; // Optional Footer for consistency
import Resources from "../components/Resources";
import { motion } from "framer-motion"



import ManifestoSection from '../components/ManifestoSection'

export default function ManifestoPage() {
	return <ManifestoSection />
}


// export default function ResourcesPage() {
// 	return (
// 		<div className="app">
// 			<Navbar /> {/* Add a Navbar for navigation */}
// 			<main className="bingo-page">
// 				<h1 className="page-title">The 34 North Manifesto</h1>
// 				<p className="page-subtitle">
// 					Belief and Values of the Aromantic
// 				</p>
// 				<img
// 					src={'/images/34N-Manifesto/1.png'}
// 					alt={'1'}
// 					className="img-fluid rounded"
// 					loading="lazy" />

// 			</main>
// 		</div>
// 	);
// }
