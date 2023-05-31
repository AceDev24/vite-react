import React, { useEffect, useState } from 'react'

const Experiences = () => {
    const [experiences, setExperiences] = useState();

    const fetchExperiences = async () => {
        const url = 'https://admin.codewithharsh.ca/api/experiences';
        const response = await fetch(url);
        const data = await response.json();
        
        setExperiences(data);
        console.log('fetchExperiences ', data);
      };

      useEffect(() => {
        fetchExperiences();
      }, []);
    
  return (
    <section id='experiences' className='className="section gray-bg" id="resume"'>
        <div className="container">
            <div className="section-title">
                <h4>Experience</h4>
                <h2>Work History</h2>
            </div>
            <div className="row">
                <div className="col-12 m-15px-tb">
                    <div className="resume-box border border-dark">
                        <ul>
                        {experiences && experiences.map((item, index) => {
                            return(
                            <li key={index}>
                                <div className="icon border border-dark">
                                    <i className="fas fa-briefcase "></i>
                                </div>
                                <span className="time">{new Date(item?.start_date).getFullYear()} - {new Date(item?.end_date).getFullYear()}</span>
                                <h5>{item?.job_title} - {item?.company_name}</h5>
                                <p>{item?.description}</p>
                            </li>
                            )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experiences