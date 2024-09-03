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
    <div></div>
  )
}

export default Entries