
// later add url to a env file for next project
const API_URL = "http://127.0.0.1:8000/";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {}),
        },
        ...options,
    });
    
    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.error || "Something went wrong");
    }

    return {data, response};
}
