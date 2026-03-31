import { apiFetch } from "./api";
import { signUpType } from "@/types/types";


// Refractor to include csrf token for django verification
export function login(username: string, password: string) {
    return apiFetch("users/login/", {
        method: "POST",
        // credentials: "include", // IMPORTANT for session auth
        body: JSON.stringify({ username, password }),
    });

}

export function logout(auth_token: string){
    return apiFetch("users/logout/", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({auth_token})
    })
}

export function signup(user: signUpType) {
    return apiFetch("users/signup/", {
        method: "POST",
        body: JSON.stringify(user)
    });
}


