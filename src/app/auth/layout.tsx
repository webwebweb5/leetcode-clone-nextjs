"use client"

import useUserAuth from "@/hooks/useUserAuth";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { pageLoading } = useUserAuth();

  if (pageLoading) return null;
  
  return (
    <div className="h-screen flex items-center justify-center bg-[#0F0F0F]">
      {children}
    </div>
  );
};

export default AuthLayout;
