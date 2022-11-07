import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ totalPage, handleClick, currentPage }) => {
  return (
    <nav>
      <ul className={styles.ul}>
        <li className={styles.previous}>
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
          <a href="#">Next</a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
