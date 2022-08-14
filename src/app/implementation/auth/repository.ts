import { request, makePostReq, makeGetReq, makePatchReq } from '@reactoso-request';
import { call, put, takeLatest, RepositoryResult } from '@repository';
import { PayloadAction } from '@service';

import { actions } from './service';
import { createApiUrl } from './settings';
import { IAuthenticatedUser } from './types';

export function* register(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/register`;
    yield call(request, url, makePostReq(params));
    yield info(action);
  } catch (e) {
    yield put(actions.setLoading(false));
    yield put(actions.setError({ source: 'register' }));
  }
}
export function* update(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/update`;
    const response = yield call(request, url, makePatchReq(params));
    yield put(actions.setUser(response));
  } catch (e) {
    //
    yield put(actions.setError({ source: 'update' }));
  }
}

export function* login(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/login`;
    yield call(request, url, makePostReq(params));
    yield info(action);
  } catch (e) {
    yield put(actions.setLoading(false));
    yield put(actions.setError({ source: 'login' }));
  }
}

export function* logout(action: PayloadAction<any>): RepositoryResult {
  const { controller } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/logout`;
    yield call(request, url, makePostReq());
  } catch (e) {
    yield put(actions.setLoading(false));
    yield put(actions.setError({ source: 'logout' }));
  }
}

export function* info(action: PayloadAction<any>): RepositoryResult {
  const { controller } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/info`;
    const user = (yield call(request, url, makeGetReq())) as IAuthenticatedUser;
    yield put(actions.setUser(user));
  } catch (e) {
    yield put(actions.setLoading(false));
  } finally {
    yield put(actions.checkingInfoDone());
  }
}

export default function* repository() {
  yield takeLatest(actions.register.type, register);
  yield takeLatest(actions.update.type, update);
  yield takeLatest(actions.login.type, login);
  yield takeLatest(actions.logout.type, logout);
  yield takeLatest(actions.info.type, info);
}
