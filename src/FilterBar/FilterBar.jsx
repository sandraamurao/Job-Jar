import "./FilterBar.css";

function FilterBar({ activateFilterStatus, active }) {
	const filters = ["All", "Applied", "Interview", "Offers", "Rejected"];

	return (
		<div className="filter-buttons">
			{filters.map((filter) => (
                <button
                key={filter} // like a name; just for React internally to track which item is which when the list updates.
				onClick={() => activateFilterStatus(filter)}
				className={active === filter ? "btn-active" : "btn"}
			> {filter} </button>
            ))}

			<button className="new-application-btn"> + New Application </button>
		</div>
	);
}

export default FilterBar;
