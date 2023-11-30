import { fetchMatches, fetchMatchesSuccess, fetchMatchesError, FETCH_MATCHES, FETCH_MATCHES_SUCCESS, FETCH_MATCHES_FAILURE, MatchesAction } from '../Actions/matchActions';
import { Reducer, AnyAction } from 'redux';
import { MatchesState } from '../types/matchesState';

const initialState: MatchesState = {
  matches: [],
  loading: false,
  error: null,
};

function matchesReducer(state = initialState, action: MatchesAction) {
  switch (action.type) {
    case FETCH_MATCHES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MATCHES_SUCCESS:      
      return {
        ...state,
        matches: [...state.matches, ...action.payload],
        loading: false,
        error: null,
      };
    case FETCH_MATCHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};


export default matchesReducer;
