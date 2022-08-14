import { request, makePostReq, makeGetReq, makeDeleteReq } from '@reactoso-request';
import { call, put, takeLatest, RepositoryResult } from '@repository';
import { PayloadAction } from '@service';

import { actions } from './service';
import { createApiUrl } from './settings';

export function* create(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/create`;
    const data = yield call(request, url, makePostReq(params));
    yield put(actions.addData({ controller, data }));
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}
export function* loadAll(action: PayloadAction<any>): RepositoryResult {
  const { controller } = action.payload;
  try {
    const url = `${createApiUrl(controller)}`;
    const data = (yield call(request, url, makeGetReq())) as any;
    yield put(actions.setData({ controller, data }));
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}
export function* loadOne(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/${params.id}`;
    const data = (yield call(request, url, makeGetReq())) as any;
    yield put(actions.setData({ controller, data }));
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}
export function* remove(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/${params.id}`;
    yield call(request, url, makeDeleteReq());
    yield put(actions.removeData({ controller, data: params }));
  } catch (e) {
    yield put(actions.setLoading(false));
  }
}

export default function* repository() {
  yield takeLatest(actions.create.type, create);
  yield takeLatest(actions.loadAll.type, loadAll);
  yield takeLatest(actions.loadById.type, loadOne);
  yield takeLatest(actions.remove.type, remove);
}
