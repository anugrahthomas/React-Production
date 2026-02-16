import { createContext, useState, type ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeOld:React.FC<{children: ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState<Theme>("light");
  
  const toggleTheme = ():void => {
    setTheme((p) => (p=='light') ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeOld;