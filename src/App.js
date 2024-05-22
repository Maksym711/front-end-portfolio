import { useState } from 'react';
import './App.css';
import ThemeContext from './helper/ThemeContext';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {

  const [isThemeLight, setIsThemeLight] = useState(() => {
    const storedTheme = localStorage.getItem("themeLight")
    return storedTheme === null ? true : JSON.parse(storedTheme)
  })

  const switchTheme = () => {
    setIsThemeLight(prevTheme => {
      const newTheme = !prevTheme
      localStorage.setItem("themeLight", JSON.stringify(newTheme))
      return newTheme
    })
  }

  return (
    <ThemeContext.Provider value={{isThemeLight, switchTheme}}>
      <div className={isThemeLight ? 'app light' : 'app black'}>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
