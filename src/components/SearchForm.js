import React, { useState, useEffect } from "react";


export default function SearchForm(props) {
  console.log(props, 'this is my search props')
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }
  
  useEffect(() => {
    const results = props.characters.filter(person =>
      person.toString().toLowerCase().includes(searchTerm)
    );
    console.log(results)
    setSearchResults(results);
  },[searchTerm]);
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
