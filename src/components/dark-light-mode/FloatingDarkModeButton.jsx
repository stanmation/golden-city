import { useDarkLightTheme } from "./DarkLightThemeContext";

export default function FloatingDarkModeButton() {
  const { darkMode, darkLightToggleTheme } = useDarkLightTheme();

  return (
    <button
      onClick={darkLightToggleTheme}
      className="
        fixed bottom-5 right-5
        z-50
        w-14 h-14
        rounded-full
        bg-yellow-500 dark:bg-gray-800
        text-white dark:text-yellow-400
        shadow-lg hover:scale-110
        transition-all duration-300
        flex items-center justify-center
        text-2xl
      "
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}