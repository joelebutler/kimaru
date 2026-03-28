export type Theme = "default" | "dark" | "sunset";
export const Themes: Theme[] = ["default", "dark", "sunset"];

export function applyTheme(theme: string) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}