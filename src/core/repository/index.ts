/* eslint-disable no-restricted-imports */
import { useSaga } from '@reactoso-saga';

import { IInjectRepositoryParams } from './types';

export function useRepository(params: IInjectRepositoryParams) {
  const p = { key: params.key, saga: params.repository };
  useSaga(p);
}

export * from '@reactoso-saga';
export type { RepositoryResult } from './types';
