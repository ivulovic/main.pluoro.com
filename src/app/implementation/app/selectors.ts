import { AppsScope } from '@controllers/app/settings';
import { IRootState, createSelector } from '@service';

import { initialState } from './service';
import { APP_SCOPE } from './settings';
import { IAppState } from './types';

export const selectState = (state: IRootState): IAppState => state?.[APP_SCOPE] || initialState;

const selectScope = (state: IRootState, scopeId: AppsScope): AppsScope => scopeId;

export const selectData = createSelector([selectState, selectScope], (state: IAppState, scopeId) => {
  return state.data[scopeId];
});

export const selectLoading = createSelector([selectState, selectScope], (state: IAppState, scopeId) => {
  return state.loading[scopeId];
});

export const selectError = createSelector([selectState, selectScope], (state: IAppState, scopeId) => {
  return state.error[scopeId];
});
