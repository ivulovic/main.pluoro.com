import { useRepository } from '@repository';
import { useService } from '@service';

import repository from './repository';
import * as selectors from './selectors';
import { service, actions } from './service';
import { APP_SCOPE } from './settings';
import { IAppImplementation } from './types';

const useAppImplementation = (): IAppImplementation => {
  useService({ key: APP_SCOPE, service });
  useRepository({ key: APP_SCOPE, repository });

  return { actions, selectors };
};

export default useAppImplementation;
