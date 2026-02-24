import "./FilterBar.css";

function FilterBar({ activateFilterStatus, active, onNewApplication }) {
	const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

	return (
		<div className="btn-container">
			{filters.map((filter) => (
				<button
					key={filter} // like a name; just for React internally to track which item is which when the list updates.
					onClick={() => activateFilterStatus(filter)}
					className={`filter-btn ${active === filter ? "btn-active" : "btn"}`}
				>
					{filter}
				</button>
			))}
			<button
				className="new-application-btn"
				onClick={onNewApplication}
			>
				+ New Application
			</button>
		</div>
	);
}

export default FilterBar;
