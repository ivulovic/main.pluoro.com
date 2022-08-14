/* eslint-disable no-restricted-imports */
import { useReducer, createSlice, SliceCaseReducers } from '@reactoso-redux';

import {
  ICreateServiceOptionsInput,
  ICreateServiceOptionsOutput,
  IInjectStoreParams,
  TRootStateKeyType,
} from './types';

export * from './IRootState';

export function useService<Key extends TRootStateKeyType>(params: IInjectStoreParams<Key>) {
  const p = { key: params.key, reducer: params.service };
  return useReducer(p);
}

export const createService = <State, CaseReducers extends SliceCaseReducers<State>, Name extends TRootStateKeyType>(
  options: ICreateServiceOptionsInput<State, CaseReducers, Name>,
) => {
  const internalOptions: ICreateServiceOptionsOutput<State, CaseReducers, Name> = {
    name: options.name,
    reducers: options.actions,
    initialState: options.initialState,
    extraReducers: options.external,
  };
  const result = createSlice(internalOptions);
  return {
    name: result.name,
    service: result.reducer,
    actions: result.actions,
    getInitialState: result.getInitialState,
  };
};

export type { TRootStateKeyType } from './types';
export * from '@reactoso-redux';
