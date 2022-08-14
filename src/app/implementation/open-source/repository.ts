import { request, makeGetReq } from '@reactoso-request';
import { call, put, takeEvery, RepositoryResult } from '@repository';
import { PayloadAction } from '@service';

import { actions } from './service';
import { createApiUrl } from './settings';

export function* load(action: PayloadAction<any>): RepositoryResult {
  const { controller, params } = action.payload;
  console.log('iv:', controller, params);
  try {
    const requestUrl = `${createApiUrl(controller)}/${params.id}`;
    const data = (yield call(request, requestUrl, makeGetReq())) as any;
    yield put(
      actions.setData({
        controller,
        params,
        data,
      }),
    );
  } catch (e) {
    yield put(
      actions.setLoading({
        controller,
      }),
    );
    // yield put(
    //   actions.setError({
    //     controller,
    //   }),
    // );
  }
}

export default function* repository() {
  yield takeEvery(actions.load.type, load);
}
