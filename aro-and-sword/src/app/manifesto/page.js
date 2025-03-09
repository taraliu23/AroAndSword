
'use client';

import React from "react";
import Navbar from '../components/Navbar';
import ManifestoSection from '../components/ManifestoSection'

export default function ManifestoPage() {
	return (
		<div className="app">

			<Navbar />

			<main
				className="bingo-page">
				<ManifestoSection />
			</main>

		</div>
	)
}

