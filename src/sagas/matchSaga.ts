import { put, takeLatest, call} from 'redux-saga/effects';
import { FetchMatchesErrorAction, FetchMatchesSuccessAction, FetchMatchesAction, FETCH_MATCHES, FETCH_MATCHES_FAILURE, FETCH_MATCHES_SUCCESS} from '../Actions/matchActions';
import { generateMockData } from '../utils/api';

function* fetchDataSaga(action: FetchMatchesAction) {
  try {
    const { page, pageSize } = action.payload;
    const data : Match[] = yield call(fetchData, page, pageSize);    
    yield put<FetchMatchesSuccessAction>({ type: FETCH_MATCHES_SUCCESS, payload: data });
  } catch (error : any) {
    yield put<FetchMatchesErrorAction>({ type: FETCH_MATCHES_FAILURE, payload: { error: error } });
  }
}


export const fetchData = async (page: number, pageSize: number): Promise<any[]> => {
  try {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    const dataForPage = generateMockData(page, pageSize);

    return dataForPage

  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export function* rootSaga() {
  yield takeLatest(FETCH_MATCHES, fetchDataSaga);
}


