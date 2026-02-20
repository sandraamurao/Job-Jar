import "./FilterBar.css";

function FilterBar({ activateFilterStatus, active }) {
	const filters = ["All", "Applied", "Interview"];

	return (
		<div>
			{filters.map((filter) => (
                <button
                key={filter} // like a name; just for React internally to track which item is which when the list updates.
				onClick={() => activateFilterStatus(filter)}
				className={active === filter ? "btn-active" : "btn"}
			> {filter} </button>
            ))}

			<button> + application </button>
		</div>
	);
}

export default FilterBar;
