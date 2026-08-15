import { Link } from "react-router";
import { ResetPasswordForm } from "wasp/client/auth";
import { AuthLayout } from "../AuthLayout";

export function PasswordResetPage() {
  return (
    <AuthLayout>
      <ResetPasswordForm />
      <div className="mt-6 border-t border-slate-800 pt-4 text-center">
        <span className="text-sm font-medium text-slate-300">
          Si todo está bien,{" "}
          <Link to="/login" className="font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors">
            ir al inicio de sesión
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}

