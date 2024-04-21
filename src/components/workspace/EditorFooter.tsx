import { ChevronUp } from "lucide-react";

type EditorFooterProps = {
  handleSubmit?: () => void;
};

export default function EditorFooter({ handleSubmit }: EditorFooterProps) {
  return (
    <div className="flex bg-background w-full">
      <div className="mx-5 my-[10px] flex justify-between w-full">
        <div className="mr-2 flex flex-1 flex-nowrap items-center space-x-4">
          <button className="px-3 py-1.5 font-medium items-center transition-all inline-flex bg-[#2e2e2e] text-sm hover:bg-[#2e2e2e]/80 rounded-lg pl-3 pr-2">
            Console
            <div className="ml-1 transform transition flex items-center">
              <ChevronUp className="fill-gray-6 mx-1 fill-dark-gray-6" />
            </div>
          </button>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <button
            className="px-3 py-1.5 text-sm font-medium items-center whitespace-nowrap transition-all focus:outline-none inline-flex bg-[#2e2e2e] hover:bg-[#2e2e2e]/80 rounded-lg"
            // onClick={handleSubmit}
          >
            Run
          </button>
          <button
            className="px-3 py-1.5 font-medium items-center transition-all focus:outline-none inline-flex text-sm text-white bg-green-600 hover:bg-green-600/80 rounded-lg"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
