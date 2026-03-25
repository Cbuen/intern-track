'use client'
import { useState } from "react";

const listItemStyle = "flex flex-row space-x-12.5";



export default function AppliedJob() {
    const [status, setStatus] = useState("applied");

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
                <ol className="list-none">
                    <li className={listItemStyle}>

                        <p>Apple Computers</p>
                        <p>Software Enginner</p>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            name="status"
                            className={"p-2 border rounded bg-white dark:bg-zinc-800" + getColor()}
                        >
                            <option value="applied">Applied</option>
                            <option value="denied">Denied</option>
                            <option value="not-applied">Not Applied</option>
                        </select>
                    </li>
                </ol>
            </div>
        </section>

    );
}