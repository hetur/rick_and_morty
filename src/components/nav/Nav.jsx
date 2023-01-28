import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../searchbar/SearchBar';

export default function nav({onSearch}) {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br/>
      <Link to = '/about'>About</Link>
      <SearchBar onSearch = {onSearch}/>
    </div>
  );
}
