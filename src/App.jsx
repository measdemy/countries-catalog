import React from 'react';
import './index.css';
import ListView from './components/ListView';
import useApi from './hooks/useApi';
import allCountriesApi from './api/countries';
import { useEffect } from 'react';

function App() {
  const getAllCountriesApi = useApi(allCountriesApi.getAllCountries);

  useEffect(() => {
    getAllCountriesApi.request();
  }, []);

  const countries = getAllCountriesApi.state;
  return <ListView countries={countries} />;
}

export default App;
