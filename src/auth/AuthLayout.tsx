import { ReactNode } from "react";

export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <div className="card w-full max-w-md p-8 sm:p-10 shadow-2xl border border-slate-800 bg-slate-900/90 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

