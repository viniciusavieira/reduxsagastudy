import { call, put } from 'redux-saga/effects';
import {loadUser as getUser } from './apiCalls';

export function* loadUser() {
  try {
    const user = yield call(getUser);
    yield put({type: 'FETCH_USER_SUCCESS', payload: user});
  } catch(error) {
    yield put({type: 'FETCH_FAILED', error});
  }
}
