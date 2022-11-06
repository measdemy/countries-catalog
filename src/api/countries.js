import client from './client';

const getAllCountries = () => client.get('/all');

export default {
  getAllCountries,
};
