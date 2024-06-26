import { BadgeCheck, ThumbsUp, ThumbsDown, Star } from "lucide-react";

export default function ProblemDescription() {
  return (
    <div className="">
      {/* TAB */}
      <div className="flex h-11 w-full items-center pt-2 text-white overflow-x-hidden">
        <div
          className={
            "bg-background rounded-t-[5px] px-5 py-[10px] text-xs cursor-pointer"
          }
        >
          Description
        </div>
      </div>

      <div className="flex px-0 py-2 min-h-screen bg-background">
        <div className="p-5">
          {/* Problem heading */}
          <div className="w-full">
            <div className="flex space-x-4">
              <div className="flex-1 mr-2 text-lg text-white font-medium">
                1. Two Sum
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div
                className={`text-emerald-500 bg-emerald-500/15 inline-block rounded-[21px] bg-opacity-[.15] px-2.5 py-1 text-xs font-medium capitalize `}
              >
                Easy
              </div>
              <div className="rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-green-600">
                <BadgeCheck />
              </div>
              <div className="flex items-center cursor-pointer hover:bg-[#2e2e2e] space-x-2 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-dark-gray-6">
                <ThumbsUp />
                <span className="text-xs">120</span>
              </div>
              <div className="flex items-center cursor-pointer hover:bg-[#2e2e2e] space-x-2 rounded p-[3px] ml-4 text-lg transition-colors duration-200 text-green-s text-dark-gray-6">
                <ThumbsDown />
                <span className="text-xs">2</span>
              </div>
              <div className="cursor-pointer hover:bg-[#2e2e2e] rounded p-[3px] ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 ">
                <Star />
              </div>
            </div>

            {/* Problem Statement(paragraphs) */}
            <div className="text-white text-sm">
              <p className="mt-3">
                Given an array of integers <code>nums</code> and an integer{" "}
                <code>target</code>, return
                <em>
                  indices of the two numbers such that they add up to
                </em>{" "}
                <code>target</code>.
              </p>
              <p className="mt-3">
                You may assume that each input would have{" "}
                <strong>exactly one solution</strong>, and you may not use
                thesame element twice.
              </p>
              <p className="mt-3">You can return the answer in any order.</p>
            </div>

            {/* Examples */}
            <div className="mt-4">
              {/* Example 1 */}
              <div>
                <p className="font-medium text-white">Example 1: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [2,7,11,15], target = 9 <br />
                    <strong>Output:</strong> [0,1] <br />
                    <strong>Explanation:</strong>Because nums[0] + nums[1] == 9,
                    we return [0, 1].
                  </pre>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <p className="font-medium text-white ">Example 2: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [3,2,4], target = 6 <br />
                    <strong>Output:</strong> [1,2] <br />
                    <strong>Explanation:</strong>Because nums[1] + nums[2] == 6,
                    we return [1, 2].
                  </pre>
                </div>
              </div>
              {/* Example 3 */}
              <div>
                <p className="font-medium text-white ">Example 3: </p>
                <div className="example-card">
                  <pre>
                    <strong className="text-white">Input: </strong> nums =
                    [3,3], target = 6
                    <br />
                    <strong>Output:</strong> [0,1] <br />
                  </pre>
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="my-5">
              <div className="text-white text-sm font-medium">Constraints:</div>
              <ul className="text-white ml-5 list-disc">
                <li className="mt-2">
                  <code>2 ≤ nums.length ≤ 10</code>
                </li>

                <li className="mt-2">
                  <code>-10 ≤ nums[i] ≤ 10</code>
                </li>
                <li className="mt-2">
                  <code>-10 ≤ target ≤ 10</code>
                </li>
                <li className="mt-2 text-sm">
                  <strong>Only one valid answer exists.</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
