import client from './client';

export const getAllCountries = () => client.get('/all');
export const searchByCountry = (country) => client.get(`/name/${country}`);

// export default {
//   getAllCountries,
//   searchByCountry,
// };
