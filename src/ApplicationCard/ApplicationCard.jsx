import './ApplicationCard.css';

function ApplicationCard({ applications }) {
	console.log("applications in card: ", applications);
	return (
		<div>
			{applications.length > 0 && (
				<div className="cards-container">
					{applications.map((a) => (
						<div className="card">
							<div>
								<h1> {a.company} </h1>
								{a.jobTitle} <br />
								{a.status} <br />
								Applied: {a.dateApplied}
								<br />
								{a.jobUrl && (<a href={a.jobUrl}> View job posting </a>)}
								{a.Notes && (<div>{a.notes} </div>)}
							</div>

							<div> edit delete </div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default ApplicationCard;
