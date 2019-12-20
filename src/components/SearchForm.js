import React, { useState, useEffect } from "react";


export default function SearchForm(props) {
  //console.log(props, 'this is my search props')
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(results, 'my results for filter')
    setSearchResults(results);
  },[searchTerm]);
  console.log(searchTerm, 'my search term')

  const handleChange = event => {
    console.log(event.target.value, 'my target value');
    setSearchTerm(event.target.value);
  }

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
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </section>
  );
}
