import { useReducer } from 'react';
import { INITIAL_STATE, countryReducer } from '../reducers/countryReducer';

export default (apiFunc) => {
  const [state, dispatch] = useReducer(countryReducer, INITIAL_STATE);

  const request = async (...args) => {
    dispatch({ type: 'FETCH_START' });
    try {
      const result = await apiFunc(...args);
      dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    } catch (err) {
      dispatch({ type: 'FETCH_ERROR' });
    }
  };

  return {
    state,
    request,
  };
};
