import AddJob from "@/components/AddJob";
import AppliedJob from "@/components/AppliedJob";

export default function Home() {
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
