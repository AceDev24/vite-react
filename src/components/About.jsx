import React from 'react'

const About = () => {
  return (
    
    <section id='about' className='container'>
      <div className='row'>
        <div className='col-5 text-center'>
          <img src="./Harsh.jpeg" alt="" className='about-img' />
        </div>
        <div className='col-7 description'>
          <h4>About Me</h4>
          <h2>Welcome to My Profile</h2>
          <p>Hello I'm Harshadkumar Patel, a passionate web developer with three years of experience in building responsive and dynamic websites. I have expertise in HTML, CSS, JavaScript, Node.js, jQuery, PHP, ASP.NET, MySQL, and several web development frameworks such as Laravel, and React.

I believe in creating user-centric web experiences that are visually stunning and highly functional. My aim is to deliver clean and efficient code that not only meets but exceeds my client's expectations. I am always eager to take on new challenges. When I am not coding, you can find me exploring new technologies, attending tech conferences, or contributing to open-source projects. 

If you have a project that you would like to discuss, please feel free to contact me. Let's create something great together!</p>
        </div>
      </div>
    </section>
  )
}

export default About;