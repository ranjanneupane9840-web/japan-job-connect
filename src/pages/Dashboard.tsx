import { useEffect, useState } from "react";

function Dashboard() {
  const [resume, setResume] = useState<any>(null);
  const [appliedJobs, setAppliedJobs] = useState<any[]>([]);
  const [savedJobs, setSavedJobs] = useState<any[]>([]);

  useEffect(() => {
    const r = localStorage.getItem("resume");
    if (r) setResume(JSON.parse(r));

    setAppliedJobs(
      JSON.parse(localStorage.getItem("appliedJobs") || "[]")
    );

    setSavedJobs(
      JSON.parse(localStorage.getItem("savedJobs") || "[]")
    );
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Student Dashboard
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white p-6 shadow rounded">

          <h2 className="text-2xl font-bold mb-3">
            My Resume
          </h2>

          {resume ? (
            <>
              <p><strong>Name:</strong> {resume.fullName}</p>
              <p><strong>Email:</strong> {resume.email}</p>
              <p><strong>Phone:</strong> {resume.phone}</p>
            </>
          ) : (
            <p>No Resume Found</p>
          )}

        </div>

        <div className="bg-white p-6 shadow rounded">

          <h2 className="text-2xl font-bold mb-3">
            Applied Jobs
          </h2>

          {appliedJobs.map((job, index) => (
            <div key={index}>
              <p>{job.title}</p>
              <p>{job.company}</p>
            </div>
          ))}

          <h2 className="text-2xl font-bold mt-6">
            Saved Jobs
          </h2>

          {savedJobs.map((job, index) => (
            <div key={index}>
              <p>{job.title}</p>
              <p>{job.company}</p>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;