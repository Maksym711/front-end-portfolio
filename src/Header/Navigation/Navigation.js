import React from 'react'
import './Navigation.css'
import Button from '../../components/Button/Button'

export default function Navigation() {
  return (
    <nav>
      <Button 
        small
        onClick={() => document.getElementById('profile-wrapper').scrollIntoView({ behavior: 'smooth' })}
      >
        Profile
      </Button>
      <Button 
        small
        onClick={() => document.getElementById('projects-wrapper').scrollIntoView({ behavior: 'smooth' })}
      >
        Projects
      </Button>
      <Button 
        small
        onClick={() => document.getElementById('contacts-wrapper').scrollIntoView({ behavior: 'smooth' })}
      >
        Contacts
      </Button>
    </nav>
  )
}
