import Topbar from "@/components/shared/Topbar";
import Workspace from "@/components/workspace/Workspace";

export default function problemPage() {
  return (
    <div className="h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Topbar problemPage={true} />
      </div>
      <div className="h-[calc(100vh-5rem)] bg-[#0F0F0F]">
        <Workspace />
      </div>
    </div>
  );
}
