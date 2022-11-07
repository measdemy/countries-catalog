import React, { useState } from 'react';
import './index.css';
import ListView from './components/ListView';
import useApi from './hooks/useApi';
import { getAllCountries, searchByCountry } from './api/countries';
import { useEffect } from 'react';
import Pagination from './components/Pagination';
import Search from './components/Search';

function App() {
  const getAllCountriesApi = useApi(getAllCountries);
  const searchByCountryApi = useApi(searchByCountry);

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  useEffect(() => {
    getAllCountriesApi.request();
    searchByCountryApi.request('cambodia');
  }, []);

  const handleClick = (item) => {
    setCurrentPage(item);
  };

  const countries = getAllCountriesApi.state;
  const indexOfLastItem = currentPage * perPage;
  const indexOfFirstItem = indexOfLastItem - perPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(countries.data.length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <h1 className="text-center p-4 text-lg font-bold;">Countries Catalog</h1>
      <Search />
      <ListView
        countries={countries}
        firstPage={indexOfFirstItem}
        lastPage={indexOfLastItem}
      />
      <Pagination
        currentPage={currentPage}
        totalPage={pageNumbers}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
