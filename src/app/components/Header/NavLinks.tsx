import { NavLink } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';
// import { IAuthenticatedUser } from '@implementation/auth/types';
import { useSelector } from '@service';

export default function NavLinks(): JSX.Element {
  const t = (s) => s;
  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();
  // const user: IAuthenticatedUser = useSelector(selectors.selectAuthUser);
  const isUserLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <>
      <NavLink to="/covid19" className="nav-item">
        {t('covid19Title')}
      </NavLink>
      <NavLink to="/ambulances" className="nav-item">
        {t('ambulancesTitle')}
      </NavLink>
      <NavLink to="/air-quality" className="nav-item">
        {t('airQualityTitle')}
      </NavLink>
      {isUserLoggedIn ? (
        <>
          <NavLink to="/notes" className="nav-item">
            {t('notesTitle')}
          </NavLink>
          <NavLink to="/wishlist" className="nav-item">
            {t('wishlistTitle')}
          </NavLink>
          {/* <NavLink to="/applications/cryptoexchange" className="nav-item">
            {t('cryptoexchangeTitle')}
          </NavLink> */}
        </>
      ) : (
        <>
          {/* <NavLink to="/applications" className="nav-item">
            {t('applications')}
          </NavLink> */}
        </>
      )}
      {/* <NavLink to="/settings" className="nav-item">
        {t('settings')}
      </NavLink> */}
      {isUserLoggedIn && (
        <NavLink to="/logout" className="nav-item">
          {t('logout')}
        </NavLink>
      )}
      {!isUserLoggedIn && (
        <NavLink to="/login" className="nav-item">
          {t('login')}
        </NavLink>
      )}
    </>
  );
}
