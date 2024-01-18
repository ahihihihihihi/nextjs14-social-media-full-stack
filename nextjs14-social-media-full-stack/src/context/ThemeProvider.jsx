"use client";


import React, { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "./darkModeContext";
import '@/app/style.scss'


const ThemeProvider = ({ children }) => {
    const { darkMode } = useContext(DarkModeContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (mounted) {
        return <div className={`theme-${darkMode ? 'dark' : 'light'}`}>{children}</div>
    }
};

export default ThemeProvider;