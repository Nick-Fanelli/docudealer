"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon } from "./icons";

const ThemeToggle = () => {

    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <Switch
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            checked={theme === "dark"}
            onChange={toggleTheme}
            size="lg"
            color="primary"
            startContent={<SunFilledIcon />}
            endContent={<MoonFilledIcon />}
        />
    )

    

}

export default ThemeToggle;