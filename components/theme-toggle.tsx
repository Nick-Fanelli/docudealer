"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon } from "./icons";
import { useLayoutEffect, useState } from "react";

const ThemeToggle = () => {

    const [ isLoaded, setIsLoaded ] = useState<boolean>(false); 
    
    const { theme, setTheme } = useTheme();

    useLayoutEffect(() => {
        setIsLoaded(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    if(!isLoaded)
        return null; // TODO: SKELETON

    return (
        <Switch
            isSelected={theme === 'light'}
            onChange={toggleTheme}
            size="lg"
            color="primary"
            startContent={<SunFilledIcon />}
            endContent={<MoonFilledIcon />}
        />
    );

}

export default ThemeToggle;