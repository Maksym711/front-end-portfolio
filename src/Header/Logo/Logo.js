import React from 'react'
import './Logo.css'
import logo_icon from '../../assets/icons/logo_icon.svg'

export default function Logo() {
  return (
    <div className='logo'>
        <img src={logo_icon} alt="" />
        <strong>front-end portfolio</strong>
    </div>
  )
}
