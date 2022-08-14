import { createService, PayloadAction, useService } from '@service';

import { THEME_SCOPE, initialState } from './constants';
import { ThemeEnum } from './types';

const slice = createService({
  name: THEME_SCOPE,
  initialState,
  actions: {
    changeTheme(state, action: PayloadAction<ThemeEnum>) {
      state.selected = action.payload;
    },
  },
});

export const { actions: themeActions, service } = slice;

export const useThemeSlice = () => {
  useService({ key: slice.name, service: slice.service });
  return { actions: slice.actions };
};
