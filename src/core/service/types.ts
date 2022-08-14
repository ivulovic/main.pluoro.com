/* eslint-disable no-restricted-imports */
import { Reducer, AnyAction, CreateSliceOptions, SliceCaseReducers, ValidateSliceCaseReducers } from '@reactoso-redux';

import { IRootState } from './IRootState';

type TRequiredRootState = Required<IRootState>;

export type TRootStateKeyType = keyof IRootState;

export type TInjectedReducersType = {
  [P in TRootStateKeyType]?: Reducer<TRequiredRootState[P], AnyAction>;
};
export interface IInjectStoreParams<Key extends TRootStateKeyType> {
  key: Key;
  service: Reducer<TRequiredRootState[Key], AnyAction>;
}

export interface ICreateServiceOptionsInput<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends TRootStateKeyType,
> extends Omit<Omit<CreateSliceOptions<State, CaseReducers, Name>, 'reducers'>, 'extraReducers'> {
  actions: ValidateSliceCaseReducers<State, CaseReducers>;
  external?: CreateSliceOptions<State, CaseReducers, Name>['extraReducers'];
}

export type ICreateServiceOptionsOutput<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends TRootStateKeyType,
> = CreateSliceOptions<State, CaseReducers, Name>;
