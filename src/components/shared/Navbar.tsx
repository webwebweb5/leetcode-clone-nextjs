import { LogIn } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20 gap-4">
        <Image src="/favicon.png" alt="LeetClone" height={36} width={36} />
        <p className="font-semibold text-xl">LeetCode</p>
      </Link>
      <div className="flex items-center">
        <button className="flex items-center gap-1 bg-primary hover:bg-primary/80 text-dark px-4 py-2 rounded-md text-sm font-medium active:animate-buttonPop">
          <span>Sign In</span> <LogIn width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
