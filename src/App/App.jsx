import FilterBar from "../FilterBar/FilterBar.jsx";
import ApplicationForm from "../ApplicationForm/ApplicationForm.jsx";
import { useState } from "react";
import "./App.css";
import { jobApplicationDetails, jobStatus } from "../utils/constants.jsx";

function App() {
	const [active, setActive] = useState("All");
	const [showForm, setShowForm] = useState(false);
	const [applications, setApplications] = useState([]);

	function openForm() {
		setShowForm(true); // opens the form
	}

	function activateFilterStatus(activeFilter) {
		setActive(activeFilter);
	}

	function addApplication(formData) {
		const newJob = {
			id: crypto.randomUUID(), // Generate unique ID
			...formData, // Spread all form fields
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		setApplications([...applications, newJob]); // Add to list
		setShowForm(false);  

		console.log("New application added:", newJob);
	}

	return (
		<div className="app-container">
			<h1 className="title">Job Application Tracker</h1>

			<p>Keep track of your job search progress</p>

			<FilterBar
				activateFilterStatus={activateFilterStatus}
				active={active}
				onNewApplication={openForm /*pass openForm function */}
			/>

			{showForm && ( // checks if showForm == true
				<ApplicationForm
					onSave={addApplication}
					onClose={() => setShowForm(false)} // Closes form
				/>
			)}
		</div>
	);
}

export default App;
