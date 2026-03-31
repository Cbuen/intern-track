import { Job } from "@/types/types";
import { apiFetch } from "./api";

export function addJob(Job: Job) {
    const auth_token = localStorage.getItem("auth_token")
    return apiFetch("jobs/add/",{
        method: "POST",
        body: JSON.stringify({auth_token, ...Job}),
    }
    )
}