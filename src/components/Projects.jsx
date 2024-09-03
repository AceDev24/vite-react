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
    <section id='projects' class='projects container'>
     
    </section>
  )
}

export default Projects