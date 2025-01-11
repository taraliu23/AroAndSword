
import React from "react";

export default function Navbar({ toggleTheme, darkMode }) {
	return (
		<div className="row wrap space-10">
			<button className="button is-success" onClick={toggleTheme}>
				{darkMode ? "Light Mode" : "Dark Mode"}
			</button>
		</div>
	);
}
