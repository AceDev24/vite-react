import React from 'react'

const About = () => {
  return (
    
    <section id='about' className='container mh-100 card '>
      
      <div className='row p-5'>
        <div className='col-md-4 text-center'>
          <img src="./home-photo.png" alt="" className='about-img' />
        </div>
        <div className='col-md-7 '>
          <h4>About Me</h4>
          <h2>Welcome to My Profile</h2>
          <p class="text-justify">Hello, I'm Harshadkumar Patel, but I prefer to be called Harsh Patel. I am a passionate Full-Stack Web Developer with three years of experience in the field of Web Development and a strong background in IT. I hold a Bachelor's degree in Computer Science and Engineering, and I am currently pursuing a Post Graduate in Web Development at Humber College to further enhance my skills and knowledge.</p>
          <p class="text-justify">Throughout my career, I have developed a strong proficiency in various web technologies and frameworks. My expertise includes front-end and back-end development using HTML, CSS, JavaScript, MERN stack, PHP, C#, ASP.NET MVC Framework, Python, JAVA, and MYSQL. I have a keen eye for detail and deliver high-quality, user-friendly web applications. I excel in solving complex problems and enjoy collaborating with cross-functional teams.</p>
          <p class="text-justify">Continuous learning and staying updated with industry trends are crucial to me. I possess excellent communication and problem-solving skills, which allow me to thrive in both independent and team-oriented environments. I am dedicated, driven, and passionate about creating exceptional web experiences in the ever-evolving world of technology.</p>
        </div>
      </div>
    </section>
  )
}

export default About;