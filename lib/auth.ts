import { apiFetch } from "./api";


// Refractor to include csrf token for django verification
export function login(username: string, password: string) {
    return apiFetch("users/login/", {
        method: "POST",
        // credentials: "include", // IMPORTANT for session auth
        body: JSON.stringify({ username, password }),
    });

}

export function logout(){
    return apiFetch("users/logout/", {
        method: "POST",
        credentials: "include",
    })
}


