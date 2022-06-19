import { useState, useEffect, useRef } from "react";
import Logo from "../branding/Logo";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {}, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-6 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-6 text-blue-700 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <header className="h-14 container flex justify-between items-center ">
      <Logo />
      {renderThemeChanger()}
    </header>
  );
};

export default Header;
