import * as Ariakit from "@ariakit/react";
import type { ReactNode } from "react";

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

export function Checkbox({
  checked,
  onChange,
  children,
  className = "",
  disabled = false,
}: CheckboxProps) {
  return (
    <Ariakit.Checkbox
      checked={checked}
      onChange={(event) => onChange(event.target.checked)}
      className={`inline-flex items-center gap-2 px-3 py-2 rounded border border-brand/30 bg-surface/70 text-text font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-brand transition-colors duration-150 cursor-pointer ${className} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      <span className="flex items-center justify-center w-5 h-5 rounded border border-brand/40 bg-brand/10">
        {checked && <span className="block w-3 h-3 rounded bg-brand" />}
      </span>
      {children}
    </Ariakit.Checkbox>
  );
}

export default Checkbox;
