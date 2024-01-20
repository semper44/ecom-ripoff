import React, {useState} from 'react'
import { themeContext } from './CartContxt';

function ThemeProvider(props) {
    const [theme, setTheme] = useState(false);

  return (
    <>
        <themeContext.Provider value={{themeState:theme, themefn:setTheme}}>
            {props.children}
        </themeContext.Provider>
    </>
  )
}

export default ThemeProvider