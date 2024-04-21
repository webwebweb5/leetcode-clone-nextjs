"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { UserButton } from "./user-button";
import { Coffee, ChevronLeft, ChevronRight, AlignJustify } from "lucide-react";
import Timer from "./Timer";

type TopbarProps = {
  problemPage?: boolean;
};

export default function Topbar({ problemPage }: TopbarProps) {
  const [user] = useAuthState(auth);

  return (
    <nav className="flex items-center justify-between sm:px-12 px-4 md:px-24 h-16">
      <Link
        href="/"
        className={` items-center justify-center gap-4 ${problemPage ? "hidden sm:flex" : "flex max-sm:flex-1"}`}
      >
        <Image src="/favicon.png" alt="LeetClone" height={28} width={28} />
        <p className="font-semibold text-xl">LeetCode</p>
      </Link>

      {problemPage && (
        <div className="flex items-center gap-4 flex-1 justify-center">
          <div
            className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
            // onClick={() => handleProblemChange(false)}
          >
            <ChevronLeft />
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 font-medium max-w-[170px] text-dark-gray-8 cursor-pointer"
          >
            <div>
              <AlignJustify />
            </div>
            <p className="hidden sm:block">Problem List</p>
          </Link>
          <div
            className="flex items-center justify-center rounded bg-dark-fill-3 hover:bg-dark-fill-2 h-8 w-8 cursor-pointer"
            // onClick={() => handleProblemChange(true)}
          >
            <ChevronRight />
          </div>
        </div>
      )}

      <div className="flex items-center space-x-4 justify-end max-sm:flex-1 max-sm:justify-center">
        <Button variant={"default"} asChild>
          <Link href="#">
            <Coffee fontSize={"14"} />
          </Link>
        </Button>
        {user && problemPage && <Timer />}
        {user ? (
          <UserButton />
        ) : (
          <Button variant={"yellow"} asChild>
            <Link href="/auth/login">Sign In</Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
