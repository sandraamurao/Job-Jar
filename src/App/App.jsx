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
				Keep track of your job search progress
			</p>
			<FilterBar activateFilterStatus={activateFilterStatus} active={active} />
		</ div>
	);
}

export default App;