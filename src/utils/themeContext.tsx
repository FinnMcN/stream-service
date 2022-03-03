import { createContext, useContext, useState } from "react";

interface ITheme {
    isDark: boolean;
    toggleTheme: () => void;
}

const deafaultTheme: ITheme = {
    isDark: false,
    toggleTheme: () => {},
};

export const ThemeContext = createContext(deafaultTheme);
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: any) {
    const [isDark, setTheme] = useState(false);

    const toggleTheme = () => {
        setTheme((state) => !state);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
    );
}
