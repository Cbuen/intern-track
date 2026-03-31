'use client'

import AddJob from "@/components/AddJob";
import AppliedJob from "@/components/AppliedJob";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    if (!localStorage.getItem("auth_token")) {
      redirect("/login");
    }
  })

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-4xl space-y-16 p-8">

        {/* Add Job Section */}
        <AddJob />

        {/* Applied Jobs Section */}
        <AppliedJob />

        {/* Future Section */}

      </main>
    </div>
  );
}
