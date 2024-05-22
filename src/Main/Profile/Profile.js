import React from 'react'
import './Profile.css'
import Button from '../../components/Button/Button'
import cv from '../../assets/file/Maksym_Dovbyk_frontend_developer.pdf'

export default function Profile() {

  return (
    <section id='profile-wrapper'>
      <h1>Hi, my name is <strong>Maksym</strong></h1>
      <h3>I'm a front-end developer</h3>
      <p>In addition to this specialty, I have experience of managing people, training and working in a startup project</p>
      <div className="buttons-cv">
        <a href={cv} target='_blank'>
          <Button big>
            Open CV
          </Button>
        </a>
        <a href={cv} download="Maksym_Dovbyk_frontend_developer.pdf">
          <Button big>
            Download CV
          </Button>
        </a>
      </div>
    </section>
  )
}
