
export default function AddJob() {
    return (
        <section className="space-y-4 border p-7.5 rounded-2xl">

            <div className="flex flex-col items-center justify-between gap-2.5">
                <h2 className="text-2xl font-semibold">Add Job</h2>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="company-name" className="text-xl">Company Name</label>
                    <input type="text" name="company-name" className="border" />

                    <label htmlFor="job-name" className="text-xl">Job Title/Role</label>
                    <input type="text" name="job-name" className="border" />

                    <label className="text-xl">Status</label>
                    <select
                        name="status"
                        className="p-2 border rounded bg-white dark:bg-zinc-800"
                    >
                        <option value="applied">Applied</option>
                        <option value="denied">Denied</option>
                        <option value="not-applied">Not Applied</option>
                    </select>
                </div>
                <button className="bg-gray-800 p-3.5 border rounded-2xl">add</button>
            </div>

        </section>
    );
}