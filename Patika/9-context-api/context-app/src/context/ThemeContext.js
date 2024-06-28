import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"); //niye localstoragedan alıyoruz. Çünkü sayfa yenilenince değerler gidebiliyor.

    useEffect(() => {
     localStorage.setItem("theme",theme);
    }, [theme]);
    

    const values = {
        theme,
        setTheme
    }

    return <ThemeContext.Provider value={values}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext); // dışarıda sürekli use yaptığımız için burada yapıp dışarıya aç

