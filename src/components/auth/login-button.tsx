"use client";

import { useRouter } from "next/navigation";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LoginForm } from "@/components/auth/login-form";
import useAuthModalStore from "@/store";
import { RegisterForm } from "./register-form";
import { ResetForm } from "./reset-form";

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const LoginButton = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const { type, setType } = useAuthModalStore();

  const onClick = () => {
    router.push("/auth");
  };

  if (mode === "modal") {
    return (
      <Dialog onOpenChange={() => setType("login")}>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className="p-0 w-auto bg-transparent border-none">
          {type === "login" && <LoginForm />}
          {type === "register" && <RegisterForm />}
          {type === "resetPassword" && <ResetForm />}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};
