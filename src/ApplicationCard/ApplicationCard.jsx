import "./ApplicationCard.css";

function ApplicationCard({ applications, onDelete, onEdit }) {
	console.log("applications in card: ", applications);
	return (
		<div>
			{applications.length > 0 && (
				<div className="cards-container">
					{applications.map((a) => (
						<div className="card-contents">
							<div key={a.id}>
								<h1> {a.company} </h1>
								{a.jobTitle} <br />
								{a.status} <br />
								Applied: {a.dateApplied}
								<br />
								{a.jobUrl && <a href={a.jobUrl} target="_blank" rel="noopener noreferrer"> View job posting </a>}
								{a.Notes && <div>{a.Notes} </div>}
							</div>

							<div className="card-btn">
								<button onClick={() => onEdit(a)}>
									<span className="material-icons">edit_square</span>
								</button>

								<button>
									<span className="material-icons"  onClick={() => onDelete(a.id)}>delete</span>
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
