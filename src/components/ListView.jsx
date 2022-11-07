import React from 'react';
import styles from './ListView.module.css';
import PropTypes from 'prop-types';

const ListView = ({ countries, firstPage, lastPage }) => {
  const currentItem = countries.data.slice(firstPage, lastPage);
  const range = [];
  for (let i = firstPage + 1; i < lastPage + 1; i++) {
    range.push(i);
  }

  return (
    <>
      {/* <h1 className={styles.heading}>Countries Catalog</h1> */}
      <table className={styles.tableData}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Flags</th>
            <th>Country Name</th>
            <th>Country Code (cca2)</th>
            <th>Country Code (cca3)</th>
            <th>Native Country Name</th>
            <th>Alternative Country Name</th>
            <th>Country Calling Codes</th>
          </tr>
        </thead>
        <tbody>
          {currentItem.map((item, index) => (
            <tr key={index}>
              <td>{range[index]}</td>
              <td>
                <img src={item.flags.png} alt="flag" width={15} />
              </td>
              <td>{item.name.official}</td>
              <td>{item.cca2}</td>
              <td>{item.cca3}</td>
              <td>
                {item.languages
                  ? item.name.nativeName[Object.keys(item?.languages)[0]]
                      ?.official
                  : ''}
              </td>
              <td>{item.altSpellings}</td>
              <td>
                {item?.idd?.suffixes && item.idd.root + item?.idd?.suffixes[0]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

ListView.propTypes = {
  countries: PropTypes.object,
};

export default ListView;
