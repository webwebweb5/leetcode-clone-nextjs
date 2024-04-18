"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import useAuthModalStore from "@/store";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  const { type, setType } = useAuthModalStore();

  const handleTypeChange = () => {
    type === "login" ? setType("register") : setType("login");
  };

  return (
    <Button
      variant="link"
      className="font-normal w-full"
      size="sm"
      asChild
      onClick={handleTypeChange}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};
