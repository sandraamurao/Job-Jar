import FilterBar from "../FilterBar/FilterBar.jsx";
import ApplicationForm from "../ApplicationForm/ApplicationForm.jsx";
import ApplicationCard from "../ApplicationCard/ApplicationCard.jsx";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage.jsx";
import "./App.css";

function App() {
	const [active, setActive] = useState("All");
	const [showForm, setShowForm] = useState(false);
	const [editingJob, setEditingJob] = useState(null);
	const [applications, setApplications] = useLocalStorage(
		"job-applications",
		[],
	);

	function activateFilterStatus(activeFilter) {
		setActive(activeFilter);
	}

	function openForm() {
		setShowForm(true); // opens the form
	}

	function openEditForm(job) {
		setEditingJob(job); // store which job is being edited
		setShowForm(true); // open the form
	}

	function addApplication(formData) {
		console.log("formData: ", formData);
		if (editingJob) {
			// Edit mode - update existing job
			const updated = applications.map((job) =>
				job.id === editingJob.id
					? { ...job, ...formData, updatedAt: new Date().toISOString() }
					: job,
			);
			const confirmed = confirm("Are you sure with your changes to this application?");
			if (confirmed) {
				setApplications(updated);
				setEditingJob(null); // Clear editing state
			}
		} else {
			// Add mode - create new application
			const newJob = {
				id: crypto.randomUUID(), // Generate unique ID
				...formData, // Spread all form fields
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			};
			console.log("newJob: ", newJob);

			// Validate if same company and job title exist in saved applications
			const isMatch = applications.some(
				(job) =>
					job.company === formData.company &&
					job.jobTitle === formData.jobTitle,
			);
			if (isMatch) {
				const confirmed = confirm(
					"A duplicate is found with the same company name and job position. Add anyways?",
				);
				if (confirmed) {
					setApplications([...applications, newJob]); // Add to list
				}
			} // if no match, just add:
			else setApplications([...applications, newJob]); // Add to list
		}

		setShowForm(false); // close form

		console.log("New application added:", newJob);
	}

	function deleteApplication(id) {
		// Confirm if user wants to delete saved application first
		const confirmed = confirm("Are you sure you want to delete this application?");
		if (confirmed) {
			// delete job by filtering job.id (from applications) !== id
			const updatedJobs = applications.filter((job) => job.id !== id);

			// update applications in localStorage:
			setApplications(updatedJobs);
		}
	}

	function filterApplications() {
		if (active == "All") {
			return applications;
		}

		return applications.filter((job) => job.status === active);
	}

	const filteredApplications = filterApplications();

	return (
		<div className="app-container">
			<h1 className="title">💼 Job Jar</h1>

			<p>Keep track of your job hunting progress 💪</p>

			<FilterBar
				activateFilterStatus={activateFilterStatus}
				active={active}
				onNewApplication={openForm /*pass openForm function */}
			/>

			{showForm && ( // checks if showForm == true
				<>
					{/* Dark background */}
					<div className="modal-bg" onClick={() => setShowForm(false)} />
					{/* White form box (centered) */}
					<div
						className="modal-container"
						style={{ border: "1px black solid" }}
					>
						<div className="modal-contents">
							<ApplicationForm
								onSave={addApplication}
								onClose={() => {
									setShowForm(false);
									setEditingJob(null); // add this so that when creating new application, the form is not prefilled
								}}
								initialData={editingJob}
							/>
						</div>
					</div>
				</>
			)}

			{!showForm && (
				<>
					{applications.length == 0 && (
						<div>
							{active == "All"
								? `No applications to show yet. Click "+ New Application" to get
								started!`
								: "No applications with status " + `"${active}"`}
						</div>
					)}
					<ApplicationCard
						applications={filteredApplications}
						onDelete={deleteApplication}
						onEdit={openEditForm}
					/>
				</>
			)}
		</div>
	);
}

export default App;
