import React from 'react';
import styles from './Pagination.module.css';
import PropTypes from 'prop-types';

const Pagination = ({
  totalPage,
  handleClick,
  currentPage,
  setCurrentPage,
}) => {
  const handleNext = () => {
    if (currentPage < totalPage.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.previous} onClick={handlePrevious}>
          <a href="#">Previous</a>
        </li>
        {totalPage.map((item) => (
          <li
            key={item}
            className={`${styles.item} ${
              currentPage === item && styles.active
            }`}
            onClick={() => handleClick(item)}
          >
            <a href="#">{item}</a>
          </li>
        ))}
        <li className={styles.next}>
          <a href="#" onClick={handleNext}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.array,
  handleClick: PropTypes.func,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Pagination;
