"use client";
import { useTheme } from "./themeprovider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  const getIcon = () => {
    if (theme === "light") return "🌞";
    if (theme === "dark") return "🌙";
    return "💻";
  };

  return (
    <button
      onClick={cycleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-border/20 hover:scale-110 transition-all duration-300"
      aria-label="Toggle theme"
    >
      <span className="text-xl">{getIcon()}</span>
    </button>
  );
}
