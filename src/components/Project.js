import React from 'react'

const Project = () => {
  return (
    <>
    <div className="container">
    <h2>Projects</h2>
    <p>Here are some of my projects</p>
    </div>
    <div className='projects'>
    <div class="card">
    <img src="/danceparty_ai.jpg" alt="card" class="card-img"/>
    <div class="card-body">
      <h5 class="card-title">Project 1</h5>
      <p class="card-text">
        My projects will be updated here soon..
      </p>
      <button class="card-btn">Learn More</button>
    </div>
  </div>

  <div class="card">
    <img src="/danceparty_ai.jpg" alt="card" class="card-img"/>
    <div class="card-body">
      <h5 class="card-title">Project 2</h5>
      <p class="card-text">
        My projects will be updated here soon..
      </p>
      <button class="card-btn">Learn More</button>
    </div>
  </div>

  <div class="card">
    <img src="/danceparty_ai.jpg" alt="card" class="card-img"/>
    <div class="card-body">
      <h5 class="card-title">Project 3</h5>
      <p class="card-text">
        My projects will be updated here soon..
      </p>
      <button class="card-btn">Learn More</button>
    </div>
  </div>
    </div>
    
    </>
  )
}

export default Project
