import * as Ariakit from "@ariakit/react";
import type { ReactNode } from "react";
import React from "react";

// Tooltip only shows on hover/focus of the anchor (child)
export function Tooltip({
  children,
  content,
}: {
  children: ReactNode;
  content: ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <Ariakit.TooltipProvider>
      <Ariakit.TooltipAnchor
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
        style={{ display: "inline-flex", alignItems: "center" }}
      >
        {children}
      </Ariakit.TooltipAnchor>
      <Ariakit.Tooltip
        open={open}
        className="z-50 px-3 py-2 rounded bg-black/90 text-white text-xs shadow-lg max-w-xs"
      >
        {content}
      </Ariakit.Tooltip>
    </Ariakit.TooltipProvider>
  );
}
export default Tooltip;
