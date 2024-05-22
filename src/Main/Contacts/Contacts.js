import React, { useContext } from 'react'
import './Contacts.css'
import ThemeContext from '../../helper/ThemeContext'
import photo from '../../assets/photo/photo.png'
import telegram_icon from '../../assets/icons/telegram_icon.svg'
import phone_icon from '../../assets/icons/phone_icon.svg'
import email_icon from '../../assets/icons/email_icon.svg'

export default function Contacts() {

  const themeContext = useContext(ThemeContext)

  return (
    <section id='contacts-wrapper'>
      <div className="contact-content-wrapper">
        <h1>My contacts</h1>
        <div className="contacts-content">
          <img className='photo' src={photo} alt="photo" />
          <div className="contacts">
            <h2>Maksym Dovbyk</h2>
            <div className="telegram">
              <img className={themeContext.isThemeLight ? 'icon-contact' : 'icon-contact black'} src={telegram_icon} alt="" />
              <h3>@maksym_d10</h3>
            </div>
            <div className="phone">
              <img className={themeContext.isThemeLight ? 'icon-contact' : 'icon-contact black'} src={phone_icon} alt="" />
              <h3>+380964320162</h3>
            </div>
            <div className="email">
              <img className={themeContext.isThemeLight ? 'icon-contact' : 'icon-contact black'} src={email_icon} alt="" />
              <h3>maksym.dk10@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
