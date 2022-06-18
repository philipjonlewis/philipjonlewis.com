import { useState, useEffect } from "react";
import Logo from "../branding/Logo";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-6 text-yellow-500 ml-auto"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-6 text-gray-900 ml-auto"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="h-14 ">
      <div className="h-full px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* <Logo /> */}

        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default Header;
