import { ACTION_TYPES } from './countryAction';

export const INITIAL_STATE = {
  loading: false,
  error: false,
  data: [],
};

export const countryReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return {
        loading: false,
        error: false,
        data: [],
      };
    case ACTION_TYPES.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case ACTION_TYPES.FETCH_ERROR:
      return {
        ...state,
        error: true,
      };
  }
};
