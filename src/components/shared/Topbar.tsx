import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Topbar() {
  return (
    <nav className="flex items-center justify-between sm:px-12 px-8 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20 gap-4">
        <Image src="/favicon.png" alt="LeetClone" height={36} width={36} />
        <p className="font-semibold text-xl">LeetCode</p>
      </Link>

      <div className="flex items-center space-x-4 flex-1 justify-end">
        <Button variant={"default"} asChild>
          <Link href="#">Premium</Link>
        </Button>
        <Button variant={"yellow"} asChild>
          <Link href="/auth/login">Sign In</Link>
        </Button>
      </div>
    </nav>
  );
}
