import React, { useState } from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ countries, setCountries }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [radio, setRadio] = useState('');

  const handleChange = (e) => {
    setRadio(e.target.value);
    setIsDropdown(!isDropdown);
    const result = countries?.data?.sort(function (a, b) {
      return e.target.value === 'Asc'
        ? a.name.official.localeCompare(b.name.official)
        : b.name.official.localeCompare(a.name.official);
    });

    setCountries((prev) => {
      return { ...prev, result };
    });
  };

  return (
    <div className="ml-4 relative">
      <button
        id="dropdownRadioButton"
        data-dropdown-toggle="dropdownRadio"
        className={styles.dropdownBtn}
        type="button"
        onClick={() => setIsDropdown(!isDropdown)}
      >
        <svg
          className="mr-2 w-4 h-4 text-gray-400"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clipRule="evenodd"
          ></path>
        </svg>
        Sort country by {radio}
        <svg
          className="ml-2 w-3 h-3"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdownRadio"
        className={`${styles.modal} ${isDropdown ? 'block' : 'hidden'}`}
        data-popper-reference-hidden=""
        data-popper-escaped=""
        data-popper-placement="top"
      >
        <ul aria-labelledby="dropdownRadioButton" onChange={handleChange}>
          <li>
            <div className={styles.item}>
              <label htmlFor="default">Short by Country</label>
            </div>
            <div className={styles.item}>
              <input id="asc" type="radio" value="Asc" name="filter-radio" />
              <label htmlFor="asc">Asc</label>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <input id="desc" type="radio" value="Desc" name="filter-radio" />
              <label htmlFor="desc">Desc</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Filter.propTypes = {
  countries: PropTypes.array,
  setCountries: PropTypes.func,
};

export default Filter;
