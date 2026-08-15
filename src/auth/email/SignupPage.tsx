import { Link } from "react-router";
import { SignupForm } from "wasp/client/auth";
import { AuthLayout } from "../AuthLayout";

export function SignupPage() {
  return (
    <AuthLayout>
      <SignupForm
        additionalFields={[
          {
            name: "username",
            type: "input",
            label: "Username",
            validations: {
              required: "Username is required",
              minLength: {
                value: 6,
                message: "Username must be at least 6 characters long",
              },
            },
          },
        ]}
      />
      <div className="mt-6 border-t border-slate-800 pt-4 text-center">
        <span className="text-sm font-medium text-slate-300">
          ¿Ya tienes una cuenta?{" "}
          <Link to="/login" className="font-bold text-emerald-400 hover:text-emerald-300 underline transition-colors">
            Iniciar sesión
          </Link>
        </span>
      </div>
    </AuthLayout>
  );
}

