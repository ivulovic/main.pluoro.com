import { request, makePostReq, makeGetReq, makeDeleteReq, makePatchReq } from '@reactoso-request';
import { call, put, takeEvery, RepositoryResult } from '@repository';
import { PayloadAction } from '@service';

import { actions } from './service';
import { createApiUrl } from './settings';

export function* create(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}`;
    const data = yield call(request, url, makePostReq(params));
    yield put(actions.addData({ controller, data }));
  } catch (e) {
    // yield put(actions.setLoading(false));
  }
}
export function* loadAll(action: PayloadAction<any>): RepositoryResult {
  const { controller } = action.payload;
  try {
    const url = `${createApiUrl(controller)}`;
    const data = (yield call(request, url, makeGetReq())) as any;
    yield put(actions.setData({ controller, data }));
  } catch (e) {
    // yield put(actions.setLoading(false));
  }
}
export function* loadOne(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/${params.id}`;
    const data = yield call(request, url, makeGetReq());
    yield put(actions.setData({ controller, data: Array.isArray(data) ? data : [data] }));
  } catch (e) {
    // yield put(actions.setLoading(false));
  }
}
export function* remove(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  try {
    const url = `${createApiUrl(controller)}/${params.id}`;
    yield call(request, url, makeDeleteReq());
    yield put(actions.removeData({ controller, data: params }));
  } catch (e) {
    // yield put(actions.setLoading(false));
  }
}
export function* update(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  const { id, ...rest } = params;
  try {
    const url = `${createApiUrl(controller)}/${id}`;
    const response = yield call(request, url, makePatchReq(rest));
    yield put(actions.updateData({ controller, data: response }));
  } catch (e) {
    // yield put(actions.setLoading(false));
  }
}

export default function* repository() {
  yield takeEvery(actions.create.type, create);
  yield takeEvery(actions.loadAll.type, loadAll);
  yield takeEvery(actions.loadById.type, loadOne);
  yield takeEvery(actions.remove.type, remove);
  yield takeEvery(actions.update.type, update);
}
