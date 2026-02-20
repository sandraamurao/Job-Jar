import FilterBar from "../FilterBar/FilterBar.jsx";
import { useState } from "react";
import "./App.css";

function App() {
	const [active, setActive] = useState("All");

	function activateFilterStatus(activeFilter) {
    setActive(activeFilter);
		console.log("active", active);
		console.log(activeFilter);
	}

	console.log("2active", active);
	return (
		<div className="app-container">
			<h1 className="title">Job Application Tracker</h1>
			<p>
				Did you apply to a new job posting? Add it here to keep track of it!
			</p>
			<FilterBar activateFilterStatus={activateFilterStatus} active={active} />
		</ div>
	);
}

export default App;