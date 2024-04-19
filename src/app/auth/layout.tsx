const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center bg-[#0F0F0F]">
      {children}
    </div>
  );
};

export default AuthLayout;
