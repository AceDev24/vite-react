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
    <div></div>
  )
}

export default Certificates