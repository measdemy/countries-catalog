import React, { useState } from 'react';
import './index.css';
import ListView from './components/ListView';
import useApi from './hooks/useApi';
import { getAllCountries } from './api/countries';
import { useEffect } from 'react';
import Pagination from './components/Pagination';
import Search from './components/Search';
import Filter from './components/Filter';
import Modal from './components/Modal';

function App() {
  const perPage = 25;
  const getAllCountriesApi = useApi(getAllCountries);
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsopen] = useState(false);
  const [recordId, setRecordId] = useState();

  useEffect(() => {
    getAllCountriesApi.request();
  }, []);

  useEffect(() => {
    setCountries(getAllCountriesApi.state);
  }, [getAllCountriesApi.state]);

  const handleClick = (item) => {
    setCurrentPage(item);
  };

  const handleDetail = (id) => {
    setRecordId(id);
    setIsopen(!isOpen);
  };

  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries?.data?.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="relative">
      <h1 className="text-center p-4 text-2xl font-black;">
        Countries Catalog
      </h1>
      <div className="flex items-center">
        <Filter countries={countries} setCountries={setCountries} />
        <button
          onClick={() => setCountries(getAllCountriesApi.state)}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          All
        </button>
        <Search setCountries={setCountries} setCurrentPage={setCurrentPage} />
      </div>
      <ListView
        countries={countries}
        firstPage={indexOfFirstItem}
        lastPage={indexOfLastItem}
        handleDetail={handleDetail}
      />
      {!countries.loading && !countries.error && (
        <Pagination
          currentPage={currentPage}
          totalPage={pageNumbers}
          handleClick={handleClick}
          setCurrentPage={setCurrentPage}
        />
      )}
      {isOpen && (
        <Modal
          recordId={recordId}
          countries={countries}
          isOpen={isOpen}
          handleDetail={handleDetail}
        />
      )}
    </div>
  );
}

export default App;
