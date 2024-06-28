//import {useContext} from 'react'
//import ThemeContext from '../context/ThemeContext'; //hangi contexti kullanacaksam o componenti dahil etmem gerekli
import { useTheme } from "../context/ThemeContext"

function Button({children}) {
    //useContext de bu contexti kullanabilmemizi sağlıyor. Bu sayede o veirye erişebilmemizi sağlıyor useContext ile

     //const {theme,setTheme} = useContext(ThemeContext);
     const {theme,setTheme} = useTheme();
     
    // bu componenti kullandığım yerde <Button>children işte bu componentin açma va kapama tagi arasındakiler oluyor. React children ile bize bunu sağlamış oluyor.</Button>
  return (
    <div>
        {children}

        <div>
            Aktif tema: {theme}

            <button onClick={()=>setTheme(theme === "light" ? "dark":"light")}>Tema değiştir</button>
        </div>
    </div>
  )
}

export default Button
