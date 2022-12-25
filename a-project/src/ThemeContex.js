import { useState, createContext } from "react"

//b1 tạo context
const ThemeContext = createContext()

//b2 tạo provider

function ThemeProvider ({children}) {
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  const value = {
    theme,
    toggleTheme
  }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}