import { useRepository } from '@repository';
import { useService } from '@service';

import repository from './repository';
import * as selectors from './selectors';
import { service, actions } from './service';
import { AUTH_SCOPE } from './settings';
import { IAuthImplementation } from './types';

const useAuthImplementation = (): IAuthImplementation => {
  useService({ key: AUTH_SCOPE, service });
  useRepository({ key: AUTH_SCOPE, repository });

  return { actions, selectors };
};

export default useAuthImplementation;
