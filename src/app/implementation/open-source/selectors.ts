import { IRootState, createSelector } from '@service';

import { initialState } from './service';
import { OpenSourceScope, OPEN_SOURCE_SCOPE } from './settings';
import { IOpenSourceState } from './types';

export const selectState = (state: IRootState): IOpenSourceState => state?.[OPEN_SOURCE_SCOPE] || initialState;

const selectScope = (state: IRootState, scopeId: OpenSourceScope): OpenSourceScope => scopeId;

export const selectData = createSelector([selectState, selectScope], (state: IOpenSourceState, scopeId) => {
  return state.data[scopeId]?.data || state.data[scopeId] || []; // FIXME: fix jsons
});

export const selectLoading = createSelector([selectState, selectScope], (state: IOpenSourceState, scopeId) => {
  return state.loading[scopeId];
});

export const selectError = createSelector([selectState, selectScope], (state: IOpenSourceState, scopeId) => {
  return state.error[scopeId];
});
