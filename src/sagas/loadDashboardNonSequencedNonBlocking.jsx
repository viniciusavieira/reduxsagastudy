import { call, put, select , take} from 'redux-saga/effects';
import {loadDeparture, loadFlight, loadForecast } from './apiCalls';

function* loadDashboardNonSequencedNonBlocking() {
  try {
    // Esperando pela redux action
    yield take('FETCH_USER_SUCCESS');
    // Busca informações do usuário na store
    const user = yield select(getUserFromState);
    // Busca informações de embarque
    const departure = yield call(loadDeparture, user);
    // Despacha uma ação para atualizar a UI
    yield put({type: 'FETCH_DASHBOARD3_SUCCESS', payload: { departure, }});
    // Despacha a ação necessária para a saga de Clima e Voo começarem...
    // Podemos passar um objeto no efeito put
    yield put({type: 'FETCH_DEPARTURE3_SUCCESS', departure});
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error: error.message});
  }
}

// ====================
// Flight Saga
// ====================
function* isolatedFlight() {
  try {
    /* departure irá pegar o objeto enviado pelo efeito put */
    const departure = yield take('FETCH_DEPARTURE_3_SUCCESS');

    const flight = yield call(loadFlight, departure.flightID);

    yield put({type: 'FETCH_DASHBOARD_3_SUCCESS', payload: {flight}});
  } catch (error) {
    yield put({type: 'FETCH_FAILED', error: error.message});
  }
}
// ====================
// Forecast Saga
// ====================
function* isolatedForecast() {
    try {
     /* departure irá pegar o objeto enviado pelo efeito put */
     const departure = yield take('FETCH_DEPARTURE_3_SUCCESS');
     const forecast = yield call(loadForecast, departure.date);

     yield put({type: 'FETCH_DASHBOARD_3_SUCCESS', payload: {forecast}});
} catch(error) {
      yield put({type: 'FETCH_FAILED', error: error.message});
    }
}
