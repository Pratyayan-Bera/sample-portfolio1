import React from 'react'

export const Skills = () => {
  return (
    <>
    <div className="container">
        <h2>Skills</h2>
        <p>Here are my current skills</p>
        <div className="skills">
        <div className="front">
            <h3>Frontend</h3>
          <ul>
          <li>HTML</li>  
          <li>CSS</li>  
          <li>JavaScript</li>  
          <li>React JS</li>  
          </ul>  
        </div>

        <div className="back">
        <h3>Backend</h3>
          <ul>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        </div>

    </div>
    </>
  )
}
