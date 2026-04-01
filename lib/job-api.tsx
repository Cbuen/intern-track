import { createJob } from "@/types/types";
import { apiFetch } from "./api";

export function addJob(Job: createJob) {
    const auth_token = localStorage.getItem("auth_token")
    return apiFetch("jobs/add/",{
        method: "POST",
        body: JSON.stringify({auth_token, ...Job}),
    });
}


export function getJobs() {
    const auth_token = localStorage.getItem("auth_token")

    return apiFetch("jobs/my-jobs/", {
        method: "POST",
        body: JSON.stringify(auth_token)
    });
}