import { createContext, useContext } from "react";

export const themeContext = createContext({
  thememode: "light",
  darkMode: () => {},
  lighMode: () => {},
});

export const ThemeContextProvider = themeContext.Provider;

export default function useTheme() {
  return useContext(themeContext);
}
