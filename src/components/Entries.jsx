import React, { useEffect, useState } from 'react'

const Entries = () => {
    const [entries, setEntries] = useState();
    
  const fetchEntries = async () => {
    const url = 'https://admin.codewithharsh.ca/api/entries';
    const response = await fetch(url);
    const data = await response.json();
    
    setEntries(data);
    console.log('fetchEntries ', data);
  };
  
  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <section id='entries' className='entries container'>
        <h4>Entries</h4>
        <h2>My Latest Entries</h2>
        <div className="row justify-content-center">  
        <div className="accordion faq-accordian" id="faqAccordion">
            {entries && entries.map((item, index) => {
            return(
                <div key={index} className="card border-0 my-3">
                <div className="card-header" id="headingOne">
                    <h6 className="mb-0">{item?.title}</h6>
                </div>
                
                    <div className="card-body">
                        <p>{item?.content}</p>
                    </div>
                
                </div>
                )
            })}
            </div>
        </div>
    </section>
  )
}

export default Entries