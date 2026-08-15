import { ComponentProps, useId } from "react";
import { ControllerFieldState } from "react-hook-form";
import { twJoin } from "tailwind-merge";

interface InputProps extends Omit<ComponentProps<"input">, "children" | "id"> {
  label: string;
  fieldState: ControllerFieldState;
}

export function Input({ className, label, fieldState, ...props }: InputProps) {
  const id = useId();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="label">
        {label}
      </label>

      <input
        id={id}
        className={twJoin(
          "w-full rounded-xl border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-white placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all",
          className,
        )}
        {...props}
      />

      {fieldState.error && (
        <span className="text-sm text-red-500">{fieldState.error.message}</span>
      )}
    </div>
  );
}
