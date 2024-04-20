"use client";

import { auth } from "@/firebase/firebase";
import { useSignOut } from "react-firebase-hooks/auth";

interface LogoutButtonProps {
  children?: React.ReactNode;
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const [signOut, loading, error] = useSignOut(auth);

  const onClick = () => {
    signOut();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
