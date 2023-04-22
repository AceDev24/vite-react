import React, { useEffect, useState } from 'react'

const Certificates = () => {
    const [certificates, setCertificates] = useState();
    
  const fetchCertificates = async () => {
    const url = 'https://admin.codewithharsh.ca/api/certificates';
    const response = await fetch(url);
    const data = await response.json();
    
    setCertificates(data);
    console.log('fetchCertificates ', data);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <section id='certificates' className='certificates container'>
        <h4>Certificates</h4>
        <h2>My Best Certificates</h2>
        <div className='row'>
          {certificates && certificates.map((item, index) => {
            return(
              <div key={index} className='col-4'>
                <div className='card text-center'>
                  <img src={item?.image} alt="" className='certificate-img'/>
                  <a className="certificate-link" onClick={() => window.open(item?.url, "_blank")}>{item?.title}</a>
                </div>
              </div>
              )
          })}
        </div>
      </section>
  )
}

export default Certificates