"use client";
import Link from "next/link";

const hoverFX = "hover:text-sky-300 duration-200 ease-in-out";
const linkstyle = "border rounded py-2.5"


export default function NavBar() {
    return (
        <nav className="text-xl h-[8.5vh] sticky top-0 z-50 p-3.5 space-x-7.5 flex flex-row">
          <Link href={`/`} className={hoverFX + linkstyle}>
            Home
          </Link>
          <Link href={`/login`} className={hoverFX + linkstyle}>
            Login
          </Link>
          <Link href={`/signup`} className={hoverFX + linkstyle}>
            Signup
          </Link>
          <Link href={`/`} className={hoverFX + linkstyle}>
            Suggestions
          </Link>
          <h1 className="text-4xl font-bold">InternTrack</h1>
        </nav>
    );
}