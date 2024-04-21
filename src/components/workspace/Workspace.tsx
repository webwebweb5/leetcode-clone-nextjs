import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ProblemDescription from "./ProblemDescription";
import Playground from "./Playground";
import TestCase from "./TestCase";
import EditorFooter from "./EditorFooter";

export default function Workspace() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50} className="!overflow-y-auto" minSize={0}>
        <ProblemDescription />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={65} className="!overflow-y-auto">
            <div className="h-full bg-background !overflow-y-auto">
              <Playground />
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={35}>
            <div className="h-full px-5 bg-background !overflow-y-auto">
              <TestCase />
            </div>
          </ResizablePanel>
          <div className="">
            <EditorFooter />
          </div>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
