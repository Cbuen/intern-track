'use client'
import { useEffect, useState } from "react";
import { getJobs } from "@/lib/job-api";
import { Job } from "@/types/types";

const listItemStyle = "flex flex-row space-x-12.5";

// todo: add delete option to select and delete jobs
// todo: add method for update application stautus per row 



export default function AppliedJob() {
    const [status, setStatus] = useState("applied");
    const [jobs, setJobs] = useState<Job[]>([]);

    useEffect(() => {
        getJobs().then(({ data, response }) => {
            console.log(data);
            setJobs(data);

        });
    }, []);



    const getColor = () => {
        switch (status) {
            case "applied":
                return "bg-green-200 text-green-800";
            case "denied":
                return "bg-red-200 text-red-800";
            case "not-applied":
                return "bg-gray-200 text-gray-800";
            default:
                return "";
        }
    };


    return (
        <section className="space-y-4 border p-7.5 rounded-2xl">

            <div className="flex flex-col justify-between items-center">
                <h2 className="text-2xl font-semibold">Applied Jobs</h2>

            </div>

            {/* Placeholder list & update job section */}
            <div className="bg-white dark:bg-zinc-900 p-4 rounded shadow">
                <ol className="list-none space-y-2">
                    {jobs.map((job) => (
                        <li key={job.id} className={listItemStyle}>
                            <p>{job.company_name}</p>
                            <p>{job.title}</p>

                            <select
                                value={job.status}
                                onChange={(e) => {
                                    // optional: update local state
                                    setJobs((prev) =>
                                        prev.map((j) =>
                                            j.id === job.id
                                                ? { ...j, status: e.target.value }
                                                : j
                                        )
                                    );
                                }}
                                name="status"
                                className={
                                    "p-2 border rounded bg-white dark:bg-zinc-800 " +
                                    (job.status === "applied"
                                        ? "bg-green-200 text-green-800"
                                        : job.status === "denied"
                                            ? "bg-red-200 text-red-800"
                                            : "bg-gray-200 text-white")
                                }
                            >
                                <option value="applied">Applied</option>
                                <option value="denied">Denied</option>
                                <option value="not-applied">Not Applied</option>
                            </select>
                        </li>
                    ))}
                </ol>
            </div>
        </section>

    );
}