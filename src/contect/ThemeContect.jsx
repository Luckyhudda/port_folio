/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ThemeContect = createContext();

const ThemeProvider = ({children}) =>{
    const [isDark,setIsDark] = useState(localStorage.getItem('webTheme') === 'true');

useEffect(() =>{
    localStorage.setItem('webTheme', isDark)
},[isDark])

    return (
      <ThemeContect.Provider value={{ isDark, setIsDark }}>
        {isDark && (
          <style>
            {`
          body {
            background-color: ${isDark ? "#3f3d3d" : "white"};
            color: ${isDark ? "white" : "black"};
          }
          .header {
            background-color: ${isDark ? "#706d6d" : "white"};
            color: ${isDark ? "white" : "black"};
          }
          .activelink,
          .otheLink,
          .themeNameFooter span,
          .footerLinks{
              color: ${isDark ? "white" : "black"};
          }
          .emailTheme,
          .themeCard,
          .sectionParaTheme,
          .menuTheme{
             background-color: ${isDark ? "#706d6d" : "white"};
          }
          .mainHeadingTheme p{
            color: ${isDark ? "#d3cbcb" : "black"};
          }
          .inputTheme{   
     background-color: ${isDark ? "#706d6d" : " #f2f7fb"};
    border:  ${isDark ? "1px solid white" : "1px solid gray"};
     color: ${isDark ? "white" : "black"};
          }
          .inputTheme::placeholder{
                color: ${isDark ? "white" : "black"};
          }
        `}
          </style>
        )}
        {children}
      </ThemeContect.Provider>
    );
};
export default ThemeProvider;