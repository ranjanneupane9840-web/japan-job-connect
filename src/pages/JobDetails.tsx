import { useParams } from "react-router-dom";
import { jobs } from "../data/jobs";

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((j) => j.id === Number(id));

  if (!job) {
    return (
      <div className="text-center mt-10">
        <h2>Job Not Found</h2>
      </div>
    );
  }

  const applyJob = () => {
    const applied = JSON.parse(localStorage.getItem("appliedJobs") || "[]");

    applied.push(job);

    localStorage.setItem("appliedJobs", JSON.stringify(applied));

    alert("Application Submitted Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto my-10 bg-white shadow-lg rounded-lg p-8">

      <h1 className="text-4xl font-bold text-blue-700">
        {job.title}
      </h1>

      <p className="mt-2">
        <strong>Company:</strong> {job.company}
      </p>

      <p>
        <strong>Location:</strong> {job.location}
      </p>

      <p>
        <strong>Salary:</strong> {job.salary}
      </p>

      <p>
        <strong>Job Type:</strong> {job.type}
      </p>

      <h2 className="text-2xl font-bold mt-6">
        Job Description
      </h2>

      <p className="mt-2">{job.description}</p>

      <button
        onClick={applyJob}
        className="mt-8 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
      >
        Apply Now
      </button>

    </div>
  );
}

export default JobDetails;