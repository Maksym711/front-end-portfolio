import React from 'react'
import './Main.css'
import Profile from './Profile/Profile'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'

export default function Main() {
  return (
    <main>
      <Profile />
      <Projects />
      <Contacts />
    </main>
  )
}
