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
        <section id='experiences' class='className="section gray-bg" id="resume"'>
            <div class="container">
                <div class="section-title">
                    <h2 class="text-center">Experience</h2>
                </div>
                <div class="row">
                    <div class="col-12 m-15px-tb">
                        <div class="resume-box border border-dark " >
                            
                                Developed and maintained user interfaces using React and modern JavaScript frameworks<br/>
Implemented React Router for dynamic routing and seamless navigation within
the application<br/>
Employed Redux-Saga for managing side effects in a clean and manageable way<br/>
Optimized rendering performance using the Virtual DOM and React.memo for
component memoization<br/>
Integrated RESTful APIs and ensured smooth data flow between the front-end and
back-end services<br/>
Conducted code reviews and implemented best practices to maintain high code
quality and performance<br/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences