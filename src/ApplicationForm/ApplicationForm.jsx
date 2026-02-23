import { useState } from "react";
import { jobStatus } from "../utils/constants";
import './ApplicationForm.css';

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
		<div className="modal-form">
			<h1> New Job Application </h1>
			<form onSubmit={handleSubmit} className="form">
				{/* Company */}
				<label> <br />Company Name </label>
				<input
					type="text"
					name="company" // important! matches state key
					value={formData.company}
					onChange={handleChange}
					placeholder="Company"
					required
					className="input-field"
				/>
				<br></br>

				{/* Job Title */}
				<div>
					<label >Job Title</label>
					<input
						type="text"
						name="jobTitle"
						value={formData.jobTitle}
						onChange={handleChange}
						placeholder="e.g., Frontend Developer"
						required
						className="input-field"
					/>
				</div>

				{/* Status */}
				<div>
					<label >Status</label>
					<select
						name="status"
						value={formData.status}
						onChange={handleChange}
						required
						className="input-field"
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
				</div>

				{/* Date Applied */}
				<div>
					<label >Date Applied</label>
					<input
						type="date"
						name="dateApplied"
						value={formData.dateApplied}
						onChange={handleChange}
						required
						className="input-field"
					/>
				</div>

				{/* Job URL */}
				<div>
					<label >
						Job URL (optional)
					</label>
					<input
						type="url"
						name="jobUrl"
						value={formData.jobUrl}
						onChange={handleChange}
						placeholder="https://..."
						className="input-field"
					/>
				</div>

				{/* Notes */}
				<div>
					<label >
						Notes (optional)
					</label>
					<textarea
						name="notes"
						value={formData.notes}
						onChange={handleChange}
						placeholder="Any notes..."
						rows="3"
						className="input-field resize-none"
					/>
				</div>

				<div className="btns-container">
					<button 
						type="submit"
						className="save-btn"
					>
						Save Application
					</button>
					<button 
						type="button"
						onClick={onClose}
						className="cancel-btn"
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}

export default ApplicationForm;
