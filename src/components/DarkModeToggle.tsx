import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function DarkModeToggle({
  darkMode,
  toggleDarkMode,
}: DarkModeToggleProps) {
return (
    <>
      <button
        className=
        {`text-right max-w-md rounded-xl p-2 ${darkMode ? "text-black bg-white" : "bg-black text-neutral-300"}`}
        onClick={() => toggleDarkMode()}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </>
  );
}
