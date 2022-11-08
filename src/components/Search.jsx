import React from 'react';
import styles from './Search.module.css';
import { useState, useEffect } from 'react';
import useApi from '../hooks/useApi';
import { searchByCountry } from '../api/countries';
import PropTypes from 'prop-types';

const Search = ({ setCountries }) => {
  const [inputText, setInputText] = useState('');
  const searchByCountryApi = useApi(searchByCountry);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchByCountryApi.request(inputText);
  };

  useEffect(() => {
    setCountries(searchByCountryApi.state);
  }, [searchByCountryApi.state]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="default-search">Search</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className={styles.input}
          placeholder="Search Country Name"
          required
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </div>
    </form>
  );
};

Search.propTypes = {
  setCountries: PropTypes.func,
};

export default Search;
