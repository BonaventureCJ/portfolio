import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext("dark");




function GlobalThemeContext({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    const toggleTheme = () => {
        setTheme(prevState => (prevState === "light" ? "dark" : "light"));
        localStorage.setItem('theme', theme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        // localStorage.removeItem('theme', theme)
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme, toggleTheme
            }}
        >
             <section className={theme === "dark" ? "page--dark" : "page--light"}>
            {children}
            </section>
        </ThemeContext.Provider>
    );
}
export default GlobalThemeContext;
