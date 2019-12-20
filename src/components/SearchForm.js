import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  
  useEffect(() => {
    const results = searchResults.filter(person =>
      person.toLowerCase().includes(searchTerm)
    );
    console.log(results)
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <section className="search-form">
           <input
        id='name'
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
         {searchResults.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
