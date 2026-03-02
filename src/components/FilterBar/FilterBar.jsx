import "./FilterBar.css";

function FilterBar({ activateFilterStatus, active, onNewApplication }) {
	const filters = ["All", "Applied", "Interview", "Offer", "Rejected"];

	return (
		<div className="btn-container">
			{filters.map((filter) => (
				<button
					key={filter}
					onClick={() => activateFilterStatus(filter)}
					className={`filter-btn ${active === filter ? "btn-active" : "btn"}`}
				>
					{filter}
				</button>
			))}
			
			<button className="new-application-btn flex flex-row items-center gap-1" onClick={onNewApplication}>
				<span className="material-icons-outlined text-[14px]">add</span>
				New Application
			</button>
		</div>
	);
}

export default FilterBar;
