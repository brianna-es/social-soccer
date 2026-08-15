import { Link } from "react-router";
import { LoginForm } from "wasp/client/auth";
import { AuthLayout } from "../AuthLayout";

export function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
      <div className="mt-6 border-t border-slate-800 pt-4 flex flex-col items-center gap-2 text-center">
        <span className="text-sm font-medium text-slate-300">
          ¿No tienes una cuenta aún?{" "}
          <Link to="/signup" className="font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors">
            Regístrate aquí
          </Link>
        </span>
        <span className="text-sm font-medium text-slate-400">
          ¿Olvidaste tu contraseña?{" "}
          <Link to="/request-password-reset" className="font-semibold text-slate-300 hover:text-white underline transition-colors">
            Restablecerla
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}
