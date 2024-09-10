import React, { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinners from "./Spinners";
import { IJob } from "../utils/types";

const JobsListings = ({ isHome = false }: { isHome?: boolean }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {isLoading ? (
          <Spinners loading={isLoading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job: IJob) => (
              <JobListing job={job} key={job.id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListings;
