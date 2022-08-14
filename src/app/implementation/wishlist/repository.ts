import { request, makePostReq } from '@reactoso-request';
import { call, put, takeLatest, RepositoryResult } from '@repository';
import { PayloadAction } from '@service';

import { actions } from './service';
import { createApiUrl } from './settings';

export function* fetch(action: PayloadAction<any>): RepositoryResult {
  const { controller, params, appScope } = action.payload;
  console.log(appScope);
  try {
    const requestUrl = `${createApiUrl(controller)}/fetch`;
    yield put(
      appScope.implementation.app.actions.setLoading({
        controller,
        data: true,
      }),
    );
    const data = (yield call(request, requestUrl, makePostReq(params))) as any;
    const { url, title, image } = data;
    appScope.methods.onCreate({
      url,
      title,
      image,
    });
  } catch (e) {
    // yield put(actions.setLoading(false));
  }
}

export default function* repository() {
  yield takeLatest(actions.fetch.type, fetch);
}
