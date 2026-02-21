function ApplicationCard({ applications }) {
	console.log("applications in card: ", applications);
	return (
		<div>
			{applications.length == 0 && <div> No applications to show ;/ </div>}

			{applications.length > 0 && 
                <div> 
                    {applications.map((a) => (
                        <div> {a.company} 
                         {a.jobTitle} 
                        {a.jobUrl} 
                         {a.status} 
                       {a.notes} </div>
                    ))}
                </div>
            }
		</div>
	);
}

export default ApplicationCard;
