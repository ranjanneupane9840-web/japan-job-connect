import { Link } from "react-router-dom";
import type { Job } from "../types/Job";

interface Props {
  job: Job;
}

function JobCard({ job }: Props) {
  const applyJob = () => {
    const applied =
      JSON.parse(localStorage.getItem("appliedJobs") || "[]");

    applied.push(job);

    localStorage.setItem(
      "appliedJobs",
      JSON.stringify(applied)
    );

    alert("Applied Successfully!");
  };

  const saveJob = () => {
    const saved =
      JSON.parse(localStorage.getItem("savedJobs") || "[]");

    saved.push(job);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(saved)
    );

    alert("Job Saved!");
  };

  return (
    <div className="bg-white shadow rounded-xl p-5">

      <h2 className="text-xl font-bold">{job.title}</h2>

      <p>{job.company}</p>
      <p>{job.location}</p>
      <p>{job.salary}</p>
      <p>{job.type}</p>

      <div className="flex flex-wrap gap-2 mt-4">

        <Link to={`/jobs/${job.id}`}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            View Details
          </button>
        </Link>

        <button
          onClick={applyJob}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Apply
        </button>

        <button
          onClick={saveJob}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>

      </div>

    </div>
  );
}

export default JobCard;