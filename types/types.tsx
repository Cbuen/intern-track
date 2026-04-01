
export interface signUpType {
    username: string,
    email: string,
    password: string,
    confirm_password: string
}

export interface createJob {
    company_name: string,
    title: string,
    status: string
}

export interface Job {
    id: number,
    company_name: string,
    title: string,
    status: string
}


