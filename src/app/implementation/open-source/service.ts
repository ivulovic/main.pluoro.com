/* eslint-disable @typescript-eslint/no-unused-vars */
import { createService, PayloadAction } from '@service';

import { getUniqueKey, OPEN_SOURCE_SCOPE } from './settings';
import { IOpenSourceState } from './types';

export const initialState: IOpenSourceState = {
  data: {},
  loading: {},
  error: {},
};

const _service = createService({
  name: OPEN_SOURCE_SCOPE,
  initialState,
  actions: {
    load(state, action: PayloadAction<any>) {
      const key = getUniqueKey(action.payload);
      state.loading[key] = true;
    },
    setData(state, action: PayloadAction<any>) {
      const key = getUniqueKey(action.payload);
      state.loading[key] = false;
      state.data[key] = action.payload.data;
    },
    setLoading(state, action: PayloadAction<any>) {
      const key = getUniqueKey(action.payload);
      state.loading[key] = false;
    },
    // setError(state, action: PayloadAction<any>) {
    //   const { controller } = action.payload;
    //   state.error[controller.id] = false;
    // },
  },
});

export const { actions, service } = _service;
