import { useState } from "react";
import { jobStatus } from "../utils/constants";
/* 
In React, forms work differently than in regular HTML.
    - Regular HTML: Form manages its own data
    - React: You control the data with state
    This is called a "controlled component" — React controls the form.

*/

function ApplicationForm({ onSave, onClose }) {
	const [formData, setFormData] = useState({
		company: "",
		jobTitle: "",
		status: "",
		dateApplied: "",
		jobUrl: "",
		notes: "",
	});

	// Handle any input CHANGE
	function handleChange(event) {
		const { name, value } = event.target;

		setFormData({
			...formData, // keep all existing values
			[name]: value, // update just this field
		});
	}

	// Handle on submit forms
	function handleSubmit(event) {
		event.preventDefault();

		onSave(formData); // pass data to parent (onSave is used in line 37 App.jsx)

		// Reset form
		setFormData({
			company: "",
			jobTitle: "",
			status: "",
			dateApplied: "",
			jobUrl: "",
			notes: "",
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				{/* Company */}
				<input
					type="text"
					name="company" // important! matches state key
					value={formData.company}
					onChange={handleChange}
					placeholder="Company"
					required
				/>

				{/* Job Title */}
				<input
					type="text"
					name="jobTitle"
					value={formData.jobTitle}
					onChange={handleChange}
					placeholder="Job Title"
					required
				/>

				{/* Status */}
				<select
					name="status"
					value={formData.status}
					onChange={handleChange}
					placeholder="Job Status"
					required
				>
					<option value="" disabled>
						Select Status
					</option>
					{jobStatus.map((status) => (
						<option key={status} value={status}>
							{status}
						</option>
					))}
				</select>

				{/* Job Title */}
				<input
					type="date"
					name="dateApplied"
					value={formData.dateApplied}
					onChange={handleChange}
					required
				/>

				{/* Job URL */}
				<input
					type="url"
					name="jobUrl"
					value={formData.jobUrl}
					onChange={handleChange}
					placeholder="Job URL (optional)"
				/>

				{/* Notes */}
				<textarea
					name="notes"
					value={formData.notes}
					onChange={handleChange}
					placeholder="Notes (optional)"
				/>

				<button type="submit">Save Application</button>
				<button type="button" onClick={onClose}>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default ApplicationForm;
