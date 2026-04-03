'use client'
import { useEffect, useState } from "react";
import { getJobs } from "@/lib/job-api";
import { Job } from "@/types/types";

const listItemStyle = "grid grid-flow-col row-span-3 ";

// todo: add delete option to select and delete jobs
// todo: add method for update application stautus per row 
// todo: add live count monitor for highlight apps to finailize delete

export default function AppliedJob() {
    const [status, setStatus] = useState("applied");
    const [jobs, setJobs] = useState<Job[]>([]);
    const [deleteMode, setDeleteMode] = useState(false);
    const [hoverIds, setHoverIds] = useState(new Set());

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

    function handleDeleteMode() {
        if (deleteMode == false) {
            setDeleteMode(true);
        }
        else {
            setDeleteMode(false);
            setHoverIds(new Set());
        }
    }

    // todo: refractor but its for test
    function handleJobClick(jobId: number) {
        if (hoverIds.has(jobId)) {
            setHoverIds(prev => {
                const updated = new Set(prev);
                updated.delete(jobId);
                return updated;
            });
        }
        else {
            console.log(jobId + " clicked");
            setHoverIds(prev => new Set(prev).add(jobId));
            console.log(hoverIds);
        }

    }

    return (
        <section className="space-y-4 border p-7.5 rounded-2xl">

            <div className="flex flex-row justify-center ">
                <h2 className="text-2xl font-semibold px-[15vw]">Applied Jobs</h2>
                <button onClick={handleDeleteMode} className="bg-red-600 p-1.5 rounded-xl font-extrabold">Delete Mode</button>
            </div>

            {/* Placeholder list & update job section */}
            <div className="bg-white dark:bg-zinc-900 p-4 rounded shadow">
                <ol className="list-none space-y-2">
                    {jobs.map((job) => (
                        <li key={job.id} onClick={deleteMode ? () => { handleJobClick(job.id) } : undefined} className={`${listItemStyle}
    ${deleteMode ? "hover:bg-gray-400" : "ease-in-out duration-300"}
    ${hoverIds.has(job.id) ? "bg-gray-500" : "ease-in-out duration-300"}
    ease-in-out duration-300 p-2.5 rounded-xl
  `}>
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