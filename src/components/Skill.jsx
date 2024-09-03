import React, { useEffect, useState } from 'react'

const Skill = () => {
  const [skills, setSkills] = useState();

  const fetchSkills = async () => {
    const url = 'https://admin.codewithharsh.ca/api/skills';
    const response = await fetch(url);
    const data = await response.json();

    setSkills(data);
    console.log('fetchSkills ', data);
  };

  useEffect(() => {
    fetchSkills();
  }, [])

  return (
    <section id='skills' class='skills container'>
      <h2 class="text-center">Skills</h2>
      <p class="text-center">Javascript</p>
      <p class="text-center">Python</p>
      <p class="text-center">PHP</p>
      <p class="text-center">React</p>
      <p class="text-center">Laravel</p>
      <p class="text-center">CSS</p>
      <p class="text-center">ASP.NET</p>
      <p class="text-center">C#</p>
      <p class="text-center">Java</p>

      
    </section>
  )
}

export default Skill