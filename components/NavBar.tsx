"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { logout } from "@/lib/auth";

const hoverFX = "hover:text-sky-300 duration-200 ease-in-out";
const linkstyle = "border rounded py-2.5"




export default function NavBar() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("auth_token")) {
            setLoggedIn(true);
        }
        else {
            setLoggedIn(false);
        }
    }, []);


    // move function later to context provider? and navbar
    function handleLogout() {
        if (localStorage.getItem("auth_token")) {
            const auth_token = localStorage.getItem("auth_token") || ""; // if null empty ""
            logout(auth_token).then((data) => {
                console.log(data);
            });
            localStorage.removeItem("auth_token");
            window.location.reload();
        }
    }

    return (
        <nav className="text-xl h-[8.5vh] sticky top-0 z-50 p-3.5 space-x-7.5 flex flex-row">
            <Link href={`/`} className={hoverFX + linkstyle}>
                Home
            </Link>
            {/* conditional render if not logged in && means then render this */}
            {!isLoggedIn && (
                <>
                    <Link href={`/login`} className={hoverFX + linkstyle}>
                        Login
                    </Link>
                    <Link href={`/signup`} className={hoverFX + linkstyle}>
                        Signup
                    </Link>
                </>
            )}

            {isLoggedIn && (
                <>
                    <button onClick={handleLogout} className="w-[15vw] bg-red-500">
                        Logout
                    </button>
                </>
            )}

            <Link href={`/`} className={hoverFX + linkstyle}>
                Suggestions
            </Link>
            <h1 className="text-4xl font-bold">InternTrack</h1>

        </nav>
    );
}