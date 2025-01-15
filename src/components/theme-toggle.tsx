"use client";

import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon } from "./icons";
import { useLayoutEffect, useState } from "react";
import { Switch } from "@nextui-org/switch";
import { Button } from "@nextui-org/button";

const ThemeToggle = () => {

    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    const { theme, setTheme } = useTheme();

    useLayoutEffect(() => {
        setIsLoaded(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    if (!isLoaded)
        return (
            <Button variant="light" className="w-10 min-w-10 h-10 p-0 border-default-800 dark:border-default-100">
                <MoonFilledIcon className="text-default-200 dark:text-default-600" />
            </Button>
        );

    return (
        <Button variant="light" className="w-10 min-w-10 h-10 p-0 border-default-800 dark:border-default-100" onPress={toggleTheme}>
            {
                theme === 'light'
                    ? <SunFilledIcon className="text-default-200 dark:text-default-600" />
                    : <MoonFilledIcon className="text-default-200 dark:text-default-600" />
            }
        </Button>
    );

}

export default ThemeToggle;