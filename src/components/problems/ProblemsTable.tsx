import { problems } from "@/mock/problems";

import { BadgeCheck, Youtube } from "lucide-react";
import Link from "next/link";

export default function ProblemsTable() {
  return (
    <tbody className="text-white">
      {problems.map((problem, idx) => {
        const difficultyColor =
          problem.difficulty === "Easy"
            ? "text-green-600"
            : problem.difficulty === "Medium"
            ? "text-yellow-600"
            : "text-red-600";

        return (
          <tr key={problem.id} className={`${idx % 2 == 1 ? "bg-grey" : ""}`}>
            <th className="px-2 py-4 font-medium whitespace-nowrap text-green-600">
              <BadgeCheck fontSize={"18"} width="18" />
            </th>
            <td className="px-6 py-4">
              <Link
                className="hover:text-yellow cursor-pointer"
                href={`/problems/${problem.id}`}
              >
                {problem.title}
              </Link>
            </td>
            <td className={`px-6 py-4 ${difficultyColor}`}>
              {problem.difficulty}
            </td>
            <td className={"px-6 py-4"}>{problem.category}</td>
            <td className={"px-6 py-4"}>
              {problem.videoId ? (
                <Youtube
                  fontSize={"28"}
                  className="cursor-pointer hover:text-red-600"
                />
              ) : (
                <p className="text-gray-400">Coming soon</p>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
