// app/components/Glossary.js
"use client";
import { useState } from 'react';
// app/what-is-aromanticism/page.js

const Glossary = () => {
	const [search, setSearch] = useState("");
	const glossary = [
		{ term: "Aromantic", definition: "A person who experiences little to no romantic attraction." },
		{ term: "Queerplatonic", definition: "A type of relationship that is not romantic but is closer than friendship." }
	];

	const filteredTerms = glossary.filter(item =>
		item.term.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="glossary-widget">
			<h2>Glossary of Terms</h2>
			<input
				type="text"
				placeholder="Search terms..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<ul>
				{filteredTerms.map((item, index) => (
					<li key={index}>
						<strong>{item.term}:</strong> {item.definition}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Glossary;
