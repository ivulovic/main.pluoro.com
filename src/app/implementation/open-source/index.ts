import { useRepository } from '@repository';
import { useService } from '@service';

import repository from './repository';
import * as selectors from './selectors';
import { service, actions } from './service';
import { OPEN_SOURCE_SCOPE } from './settings';
import { IOpenSourceImplementation } from './types';

const useOpenSourceImplementation = (): IOpenSourceImplementation => {
  useService({ key: OPEN_SOURCE_SCOPE, service });
  useRepository({ key: OPEN_SOURCE_SCOPE, repository });

  return { actions, selectors };
};

export default useOpenSourceImplementation;
