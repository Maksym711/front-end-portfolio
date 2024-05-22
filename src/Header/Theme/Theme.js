import React, { useContext } from 'react'
import './Theme.css'
import ThemeContext from '../../helper/ThemeContext'
import sun_icon from '../../assets/icons/sun_icon.svg'
import moon_icon from '../../assets/icons/moon_icon.svg'

export default function Theme() {

    const themeContext = useContext(ThemeContext)

  return (
    <div className='switch-theme'>
        <img src={!themeContext.isThemeLight ? sun_icon : moon_icon} onClick={themeContext.switchTheme} />
    </div>
  )
}
