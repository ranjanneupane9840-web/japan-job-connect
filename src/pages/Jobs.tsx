import { useState } from "react";
import SearchBar from "../components/SearchBar";
import JobCard from "../components/Jobcard";
import { jobs } from "../data/jobs";

function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const filtered = jobs.filter((job) => {
    return (
      (job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase())) &&
      (location === "" || job.location === location) &&
      (salary === "" || job.salary === salary)
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-5">
        Available Jobs
      </h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="flex gap-4 my-5">

        <select
          className="border p-2 rounded"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          <option>Tokyo</option>
          <option>Osaka</option>
          <option>Kyoto</option>
        </select>

        <select
          className="border p-2 rounded"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        >
          <option value="">Any Salary</option>
          <option>¥1100/hour</option>
          <option>¥1150/hour</option>
          <option>¥1200/hour</option>
          <option>¥1300/hour</option>
        </select>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {filtered.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}

      </div>

    </div>
  );
}

export default Jobs;