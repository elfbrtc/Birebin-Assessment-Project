export const FETCH_MATCHES = 'FETCH_MATCHES';
export const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';
export const FETCH_MATCHES_FAILURE = 'FETCH_MATCHES_FAILURE';

export interface FetchMatchesAction {
  type: typeof FETCH_MATCHES;
  payload: {
    page: number;
    pageSize: number;
  };
}

export interface FetchMatchesSuccessAction {
  type: typeof FETCH_MATCHES_SUCCESS;
  payload: Match[];
  
}

export interface FetchMatchesErrorAction {
  type: typeof FETCH_MATCHES_FAILURE;
  payload: {
    error: string;
  };
}

export const fetchMatches = (page: number, pageSize: number): FetchMatchesAction => ({
  type: FETCH_MATCHES,
  payload: {
    page,
    pageSize
  },
});

export const fetchMatchesSuccess = (data: Match[]) => ({
  type: FETCH_MATCHES_SUCCESS,
  payload: data,
});

export const fetchMatchesError = (error: string) => ({
  type: FETCH_MATCHES_FAILURE,
  payload: error,
});


export type MatchesAction =
  | FetchMatchesAction
  | FetchMatchesSuccessAction
  | FetchMatchesErrorAction;