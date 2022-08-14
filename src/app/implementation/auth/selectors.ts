import { IRootState, createSelector } from '@service';

import { initialState } from './service';
import { AUTH_SCOPE } from './settings';
import { IAuthState } from './types';

export const getCatState = (state: IRootState): IAuthState => state?.[AUTH_SCOPE] || initialState;

export const selectAuthUser = createSelector(getCatState, (state: IAuthState) => state.user);

export const selectAuthLoading = createSelector(getCatState, (state: IAuthState) => state.loading);

export const selectIsLoggedIn = createSelector(getCatState, (state: IAuthState) => state.isLoggedIn);

export const selectAppStatus = createSelector(getCatState, (state: IAuthState) => state.appStatus);

export const selectAuthError = createSelector(getCatState, (state: IAuthState) => state.error);
