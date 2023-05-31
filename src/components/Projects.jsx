import React, { useEffect, useState } from 'react'

const Projects = () => {

    const [projects, setProjects] = useState();

    const fetchProjects = async () => {
        const url = 'https://admin.codewithharsh.ca/api/projects';
        const response = await fetch(url);
        const data = await response.json();
        
        setProjects(data);
        console.log('fetchProjects ', data);
      };
    
      
  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section id='projects' className='projects container'>
        <h4>Projects</h4>
        <h2>My Latest Projects</h2>
        <div className='row'>
          {projects && projects.map((item, index) => {
            return(
              <div key={index} className='col-lg-4 col-md-6 '>
                <div className='card border border-dark'>
                  <img src={item?.image} alt="" className='project-img'/>
                  <h5 class="text-center">{item?.title}</h5>
                  <span className='type text-center'><em>{item?.type?.title}</em></span>
                  <p className='text-justify'>{item.content}</p>
                  <button onClick={() => window.open(item?.url, "_blank")} className='btn btn-primary btn-sm'>View</button>
                </div>
              </div>
              )
          })}
         
          
        </div>
      </section>
  )
}

export default Projects