import { useRepository } from '@repository';
import { useService } from '@service';

import repository from './repository';
import { service, actions } from './service';
import { WISHLIST_APP_SCOPE } from './settings';
import { IWishlistImplementation } from './types';

const useWishlistImplementation = (): IWishlistImplementation => {
  useService({ key: WISHLIST_APP_SCOPE, service });
  useRepository({ key: WISHLIST_APP_SCOPE, repository });

  return { actions };
};

export default useWishlistImplementation;
