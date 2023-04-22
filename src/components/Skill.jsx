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
    <section id='skills' className='skills container'>
        <h4>Skills</h4>
        <h2>My Best skills</h2>
        <div className='row'>
        {skills && skills.map((item, index) => {
            return(
            <div key={index} className='col-2'>
                <div className='skills-item text-center' onClick={() => window.open(item?.url, "_blank")}>
                <img src={item?.image} alt="" className='skills-img'/>
                <p className='skills-description'>{item?.title}</p>
                </div>
            </div>
            )
        })}
        </div>
    </section>
  )
}

export default Skill