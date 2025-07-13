import React from 'react'
import '../App.css';
export const About = () => {
  return (
    <>
    <div className="AboutSection">
        <div className="Intro">
            <h2 className='about text-slide-in '><small>Hi I'm</small>Pratyayan</h2>
            <p className='text-typing'>
I'm a proficient fullstack web developer with expertise in building robust and scalable applications using modern tools like React, Next.js, Node.js, and Express.<span>With a strong command of both front-end and back-end development, I excel in creating seamless user experiences and efficient server-side logic.</span> Additionally, I have a solid proficiency in CSS, ensuring that the applications not only function well but also have an appealing and responsive design.</p>
          <div className="btn">
          <button>Resume</button>
          <button>Contact</button>
          </div> 
        </div>

        <div className='mypic'>
            <img src="/pngegg.png" alt="Me"/>
        </div>
    </div> 
   
    </>
  )
}
