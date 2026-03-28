import type { ComponentProps } from "react";
import { NavLink } from "@front/components/NavLink";
import { NavLink as RouterLink } from "react-router";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Button } from "./Button";

type HeaderProps = ComponentProps<"header"> & { noLinks?: boolean };

interface navLink {
  href: string;
  label: string;
}

export function Header({ className, noLinks = false, ...props }: HeaderProps) {
  const navLinks: navLink[] = [];
  return (
    <header className={`sticky top-0 z-50 w-full ${className}`} {...props}>
      <nav className="w-full flex items-center justify-between h-14 px-6 bg-surface/70 shadow-md backdrop-blur-md">
        <a
          href="/"
          className="text-2xl font-bold text-brand hover:text-brand/80"
        >
          DecideFor.Us
        </a>
        {!noLinks && (
          <>
            <nav
              aria-label="Main navigation"
              className={`w-full h-full hidden md:flex items-center justify-center gap-6 px-6 py-2`}
            >
              {navLinks.map(({ href, label }) => (
                <NavLink key={href} href={href}>
                  {label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-2 flex-1 justify-end">
              <ThemeSwitcher />
              <RouterLink to="/login">
                <Button>Login</Button>
              </RouterLink>
              <RouterLink to="/register">
                <Button>Register</Button>
              </RouterLink>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}
export default Header;
