import React from 'react'
import './ProjectCard.css'
import github_icon from '../../assets/icons/github_icon.svg'

export default function ProjectCard(props) {
  return (
    <div className='project-card-wrapper'>
      <div className="project-card-content" style={{backgroundImage: `url(${props.image})`}}>
        <div className="skills">
          <p>Skills:</p>
          <h3>{props.skills}</h3>
        </div>
        <p className='description'>
          {props.description}
        </p>
      </div>
      <h2>{props.name}</h2>
      <a href={props.gitHubLink} target='_blank'>
        <img src={github_icon} alt="github" />
      </a>
    </div>
  )
}
