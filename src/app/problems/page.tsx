import ProblemsTable from "@/components/problems/ProblemsTable";
import Topbar from "@/components/shared/Topbar";

export default function problemPage() {
  return (
    <main className="max-w-7xl mx-auto min-h-screen">
      <Topbar />

      <h1 className="text-5xl text-center text-[#cfcfcf] font-medium mt-10 mb-5">
        🤔 List Of Problems
      </h1>

      <div className="relative overflow-x-auto mx-auto px-6 pb-10">
        <table className="text-sm text-left sm:w-7/12 w-full max-w-[1200px] mx-auto">
          <thead className="text-xs text-gray-400 uppercase border-b border-[#fff]">
            <tr>
              <th scope="col" className="px-1 py-3 w-0 font-medium">
                Status
              </th>
              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Title
              </th>
              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Difficulty
              </th>

              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Category
              </th>
              <th scope="col" className="px-6 py-3 w-0 font-medium">
                Solution
              </th>
            </tr>
          </thead>
          <ProblemsTable />
        </table>
      </div>
    </main>
  );
}
