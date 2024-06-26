export default function TestCase() {
  return (
    <div className="">
      <div className="flex h-10 items-center space-x-6">
        <div className="relative flex h-full flex-col justify-center cursor-pointer">
          <div className="text-sm font-medium leading-5 text-white">
            Testcases
          </div>
          <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
        </div>
      </div>

      <div className="flex">
        <div className="mr-2 items-start mt-2">
          <div className="flex flex-wrap items-center gap-y-4">
            <div
              className={`font-medium items-center transition-all focus:outline-none inline-flex bg-[#2e2e2e] hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap`}
            >
              Case 1
            </div>
          </div>
        </div>
        <div className="mr-2 items-start mt-2">
          <div className="flex flex-wrap items-center gap-y-4">
            <div
              className={`font-medium items-center transition-all focus:outline-none inline-flex bg-[#2e2e2e] hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap`}
            >
              Case 2
            </div>
          </div>
        </div>
        <div className="mr-2 items-start mt-2">
          <div className="flex flex-wrap items-center gap-y-4">
            <div
              className={`font-medium items-center transition-all focus:outline-none inline-flex bg-[#2e2e2e] hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap`}
            >
              Case 3
            </div>
          </div>
        </div>
      </div>

      <div className="font-semibold my-4">
        <p className="text-sm font-medium mt-4 text-white">Input:</p>
        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-[#2e2e2e] border-transparent text-white mt-2">
          nums = [2,7,11,15], target = 9
        </div>
        <p className="text-sm font-medium mt-4 text-white">Output:</p>
        <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-[#2e2e2e] border-transparent text-white mt-2">
          [0,1]
        </div>
      </div>
    </div>
  );
}
