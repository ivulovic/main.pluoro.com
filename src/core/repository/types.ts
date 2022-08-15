/* eslint-disable no-restricted-imports */
import { RequestResult } from '@reactoso-request';
import { CallEffect, PutEffect, Saga, SagaInjectionModes } from '@reactoso-saga';
import { AnyAction, IRootState } from '@service';

export type TRootStateKeyType = keyof IRootState;

export interface IInjectRepositoryParams {
  key: TRootStateKeyType | string;
  repository: Saga;
  mode?: SagaInjectionModes;
}

export type RepositoryResult =
  | Generator<CallEffect<RequestResult> | PutEffect<AnyAction>, void>
  | CallEffect<RequestResult>
  | PutEffect<AnyAction>;
