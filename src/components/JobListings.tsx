import React from "react";
import jobs from "../jobs.json";
import JobListing from "./JobListing";

export interface IJob {
  type: string;
  title: string;
  description: string;
  salary: string;
  location: string;
  id: string;
}

const JobsListings = ({ isHome = false }: { isHome?: boolean }) => {
  const jobListings = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobListings.map((job: IJob) => (
            <JobListing job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsListings;
