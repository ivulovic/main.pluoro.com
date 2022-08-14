/* eslint-disable @typescript-eslint/no-unused-vars */
import { createService, PayloadAction } from '@service';

import { WISHLIST_APP_SCOPE } from './settings';
import { IWishlistState } from './types';

export const initialState: IWishlistState = {

};

const _service = createService({
  name: WISHLIST_APP_SCOPE,
  initialState,
  actions: {
    fetch(state, action: PayloadAction<any>) {
      //
    },
  },
});

export const { actions, service } = _service;
