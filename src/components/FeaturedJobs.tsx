import { jobs } from "../data/jobs";
import JobCard from "./Jobcard";

function FeaturedJobs() {

return (

<div className="max-w-6xl mx-auto my-10">

<h2 className="text-3xl font-bold mb-5">
Featured Jobs
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{jobs.map(job=>(
<JobCard key={job.id} job={job}/>
))}

</div>

</div>

);

}

export default FeaturedJobs;