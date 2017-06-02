import { call, put, select , take} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast } from './apiCalls';

function* loadDashboardSequenced() {
  try {
    yield take('FETCH_USER_SUCCESS');
    const user = yield select(state => state.user);
    const departure = yield call(loadDeparture, user);
    const flight = yield call(loadFlight, departure.flightID);
    const forecast = yield call(loadForecast, departure.date);
    yield put({
      type: 'FETCH_DASHBOARD_SUCCESS',
      payload: { forecast, flight, departure }
    });
  } catch (error) {
    yield put({
      type: 'FETCH_FAILED',
      error: error.message
    });
  }
}
