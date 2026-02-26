import "./ApplicationCard.css";

function ApplicationCard({ applications, onDelete, onEdit }) {
	console.log("applications in card: ", applications);

	function setStatusColor(status) {
		if (status == "Applied") return "text-[#098bdb]";
		else if (status == "Interview") return "text-[#e0b209]";
		else if (status == "Offer") return "text-[#17c24d]";
		else if (status == "Rejected") return "text-[#b10b0b]";
	}

	function setBorderColor(status) {
		if (status == "Applied") return "border-[#146496]";
		else if (status == "Interview") return "border-[#a48b2f]";
		else if (status == "Offer") return "border-[#3d9738]";
		else if (status == "Rejected") return "border-[#9c2a2a]";
	}

	function setCardBgColor(status) {
		if (status == "Applied") return "bg-[#abd7f3] border border-[#588fb1]";
		else if (status == "Interview")
			return "bg-[#f7e39c] border border-[#ae9746]";
		else if (status == "Offer") return "bg-[#b7f79c] border border-[#60b43c]";
		else if (status == "Rejected")
			return "bg-[#f4a7a7] border border-[#a12a2a]";
	}

	return (
		<div>
			{applications.length > 0 && (
				<div className="cards-container">
					{applications.map((a) => (
						<div
							key={a.id}
							className={`card-contents ${setCardBgColor(a.status)}`}
						>
							<div className="flex flex-col gap-1">
								<h1 className="company-name"> {a.company} </h1>
								<span className="capitalize text-[17px]"> {a.jobTitle} </span>

								<div className="flex flex-row items-center gap-1">
									{/* div for status and icon */}
									<span
										className={`material-icons text-sm ${setStatusColor(a.status)}`}
									>
										circle
									</span>
									<span className={`${setStatusColor(a.status)} font-bold`}>
										{a.status}
									</span>
								</div>

								<span className="mt-2 mb-2">
									{/* span for applied date */}
									Applied: <span className="font-bold"> {a.dateApplied} </span>
								</span>

								{a.jobUrl && (
									<div className="flex items-center gap-1">
										<span className="material-icons text-[#4b4b4d]">link</span>
										<a
											href={a.jobUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:underline text-[#383839]"
										>
											View job posting
										</a>
									</div>
								)}
								{a.notes && (
									<div className="mt-1 flex flex-col gap-1">
										<span
											className={`mt-3 border-b ${setBorderColor(a.status)}`}
										>
											{/* just to add a border */}
										</span>
										<span className="text-[#303031]"> Notes: </span>
										<span> {a.notes} </span>
									</div>
								)}
							</div>

							<div className="card-btn">
								<button onClick={() => onEdit(a)}>
									<span className={`material-icons-outlined ${setStatusColor(a.status)}`}>edit</span>
								</button>

								<button>
									<span
										className={`material-icons-outlined ${setStatusColor(a.status)}`}
										onClick={() => onDelete(a.id)}
									>
										delete
									</span>
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default ApplicationCard;
