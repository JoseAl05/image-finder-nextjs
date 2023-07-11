
import React, { useState, useEffect } from "react";
import { Children } from "../../../types";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Banner = ({ children }: Children) => {

    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);



    const style = {
        backgroundImage: `radial-gradient(at 47% 33%, hsl(223.01, 78%, 28.999999999999996%) 0, transparent 59%),radial-gradient(at 82% 65%, hsl(216.00, 18%, 5%) 0, transparent 55%`
    }

    useEffect(() => {
        setMounted(true);
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
            )
        }

        else {
            return (
                <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
            )
        }
    };

    return (
        <>

            <div className="dark:bg-[#0c111f] h-full" style={style}>
                {/* <div className="flex justify-center pt-3">
                    {renderThemeChanger()}
                </div> */}
                {children}
            </div>
        </>
    );
}

export default Banner;