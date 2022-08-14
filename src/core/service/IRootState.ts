import { APP_SCOPE } from '@implementation/app/settings';
import { IAppState } from '@implementation/app/types';
import { AUTH_SCOPE } from '@implementation/auth/settings';
import { IAuthState } from '@implementation/auth/types';
import { OPEN_SOURCE_SCOPE } from '@implementation/open-source/settings';
import { IOpenSourceState } from '@implementation/open-source/types';
import { WISHLIST_APP_SCOPE } from '@implementation/wishlist/settings';
import { IWishlistState } from '@implementation/wishlist/types';
import { AIR_QUALITY_SCOPE } from '@pages/AirQuality/constants';
import { AirQualityState } from '@pages/AirQuality/types';
import { THEME_SCOPE } from 'app/style/theme/slice/constants';
import { ThemeState } from 'app/style/theme/slice/types';

export interface IRootState {
  [THEME_SCOPE]: ThemeState;
  // controllers
  [AUTH_SCOPE]: IAuthState;
  [APP_SCOPE]: IAppState;
  [WISHLIST_APP_SCOPE]: IWishlistState;
  [AIR_QUALITY_SCOPE]: AirQualityState;
  [OPEN_SOURCE_SCOPE]: IOpenSourceState;
}
