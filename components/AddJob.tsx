"use client"
import { addJob } from "@/lib/job-api";
import { useState } from "react";

export default function AddJob() {
    const [company_name, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("Applied");

    function handleAddJob() {
        addJob({company_name,title,status}).then(({data, response}) => {
            console.log(data);
        });
    }

    return (
        <section className="space-y-4 border p-7.5 rounded-2xl">

            <div className="flex flex-col items-center justify-between gap-2.5">
                <h2 className="text-2xl font-semibold">Add Job</h2>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="company-name" className="text-xl">Company Name</label>
                    <input onChange={(e) => {setCompanyName(e.target.value)}} type="text" name="company-name" className="border" />

                    <label htmlFor="job-name" className="text-xl">Job Title/Role</label>
                    <input onChange={(e) => {setTitle(e.target.value)}} type="text" name="job-name" className="border" />

                    <label className="text-xl">Status</label>
                    <select
                        name="status"
                        className="p-2 border rounded bg-white dark:bg-zinc-800"
                        onChange={(e) => {setStatus(e.target.value)}}
                    >
                        <option value="Applied">Applied</option>
                        <option value="Denied">Denied</option>
                        <option value="Not Appied">Not Applied</option>
                    </select>
                </div>
                <button onClick={handleAddJob} className="bg-gray-800 p-3.5 border rounded-2xl">add</button>
            </div>

        </section>
    );
}