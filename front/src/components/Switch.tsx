import * as Ariakit from "@ariakit/react";

export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
}

// Ariakit does not provide a Switch component. Use Checkbox with switch styling.
export function Switch({
  checked,
  onChange,
  name,
  className = "",
  disabled = false,
}: SwitchProps) {
  return (
    <label
      className={`inline-flex items-center gap-2 cursor-pointer select-none ${disabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      <Ariakit.Checkbox
        name={name}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="sr-only"
        disabled={disabled}
      />
      <span
        className={`relative w-10 h-6 flex items-center border border-brand/30 rounded-full transition-colors duration-150 ${checked ? "bg-brand" : "bg-surface/70"}`}
      >
        <span
          className={`absolute left-0 top-0 w-6 h-6 rounded-full shadow transition-transform duration-150 ${checked ? "translate-x-4 bg-white border border-brand" : "translate-x-0 bg-white/80 border border-brand/30"}`}
        />
      </span>
    </label>
  );
}

export default Switch;
