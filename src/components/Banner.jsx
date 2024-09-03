import React from 'react'
import 'boxicons'

const Banner = () => {
  return (
    <div class='banner'>
      <div class='container'>
        <div class='row p-5' >
          <div class='col-xl-8 col-lg-8'>
            <div class='textblock'>
              <h3>Hello, It's Me</h3>
              <h1>Ace Developer</h1>
              <h3>I'm a <span>Full Stack Developer</span></h3>
            

              <a href="./StevanObradovicResume.pdf" download class="btn mt-2">Download CV</a>
            </div>
          </div>
          <div class='col-xl-4 col-lg-4'>
            <img src="./bannar.png" alt="" class='home-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner