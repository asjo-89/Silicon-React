import React, { createContext, useContext, useState  } from 'react'


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  
    const [theme, setTheme] = useState('light-theme');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
    }
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme = () => useContext(ThemeContext);