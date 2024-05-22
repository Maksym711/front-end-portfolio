import React from 'react'
import './Projects.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import arrayProjects from '../../helper/arrayProjects'

export default function Projects() {
  return (
    <section id='projects-wrapper'>
      <h1>My projects</h1>
      <div className="projects-content">
        {arrayProjects.map(item => (
          <a href={item.siteLink} target='_blank'>
            <ProjectCard 
              name={item.name}
              description={item.description}
              image={item.image}
              skills={item.skills}
              gitHubLink={item.gitHubLink}
            />
          </a>
        ))}
      </div>
    </section>
  )
}
