import React from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ countries, isOpen, handleDetail, recordId }) => {
  const { data } = countries;
  return (
    <div
      id="editUserModal"
      tabIndex="-1"
      aria-hidden="true"
      className={`${styles.container} ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className={styles['sub-container']}>
        <div action="#" className={styles.modal}>
          <div className={styles.header}>
            <h3 className={styles.heading}>Country Detail</h3>
            <button
              type="button"
              className={styles['close-btn']}
              data-modal-toggle="editUserModal"
              onClick={handleDetail}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first-name" className={styles.title}>
                  FLAGS
                </label>
                <img src={data[recordId].flags.png} alt="flag" width={35} />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last-name" className={styles.title}>
                  COUNTRY NAME
                </label>
                <p className={styles.text}>{data[recordId].name.official}</p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className={styles.title}>
                  COUNTRY CODE (CCA2)
                </label>
                <p className={styles.text}>{data[recordId].cca2}</p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="phone-number" className={styles.title}>
                  COUNTRY CODE (CCA3)
                </label>
                <p className={styles.text}>{data[recordId].cca3}</p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="department" className={styles.title}>
                  NATIVE COUNTRY NAME
                </label>
                <p className={styles.text}>
                  {
                    data[recordId].name.nativeName[
                      Object.keys(data[recordId].languages)[0]
                    ]?.official
                  }
                </p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="company" className={styles.title}>
                  ALTERNATIVE COUNTRY NAME
                </label>
                <p className={styles.text}>{data[recordId].altSpellings}</p>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="current-password" className={styles.title}>
                  COUNTRY CALLING CODES
                </label>
                <p className={styles.text}>
                  {data[recordId].idd.root + data[recordId].idd.suffixes[0]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  countries: PropTypes.array,
  isOpen: PropTypes.bool,
  handleDetail: PropTypes.func,
  recordId: PropTypes.number,
};

export default Modal;
