/* eslint-disable @typescript-eslint/no-unused-vars */
import { createService, PayloadAction } from '@service';

import { AUTH_SCOPE } from './settings';
import { AppStatusEnum, IAuthenticatedUser, IAuthState } from './types';

export const initialState: IAuthState = {
  loading: false,
  appStatus: AppStatusEnum.NotReady,
  isLoggedIn: false,
  user: null,
  error: null,
};

const _service = createService({
  name: AUTH_SCOPE,
  initialState,
  actions: {
    login(state, action: PayloadAction<any>) {
      state.error = null;
      state.loading = true;
    },
    logout(state, action: PayloadAction<any>) {
      state.error = null;
      state.isLoggedIn = false;
      state.user = null;
    },
    register(state, action: PayloadAction<any>) {
      // state.loading = true;
    },
    update(state, action: PayloadAction<any>) {
      // state.loading = true;
    },
    info(state, action: PayloadAction<any>) {
      state.appStatus = AppStatusEnum.NotReady;
      state.loading = true;
    },
    checkingInfoDone(state) {
      state.appStatus = AppStatusEnum.Ready;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload;
    },
    setUser(state, action: PayloadAction<IAuthenticatedUser>) {
      state.error = null;
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
  },
});

export const { actions, service } = _service;
