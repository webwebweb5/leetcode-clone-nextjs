import { LogIn } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { LoginButton } from "../auth/login-button";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between sm:px-12 px-8 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20 gap-4">
        <Image src="/favicon.png" alt="LeetClone" height={36} width={36} />
        <p className="font-semibold text-xl">LeetCode</p>
      </Link>
      <div className="flex items-center">
        <LoginButton mode="modal" asChild>
          <Button variant="yellow">
            <LogIn className="mr-2 h-4 w-4" /> Sign In
          </Button>
        </LoginButton>
      </div>
    </div>
  );
}
