import { NavLink } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';
// import { IAuthenticatedUser } from '@implementation/auth/types';
import { useSelector } from '@service';
import { useTranslation } from '@translations';

export default function NavLinks(): JSX.Element {
  const t = useTranslation();
  const {
    implementation: {
      auth: { selectors },
    },
  } = useAuthControllerScope();
  // const user: IAuthenticatedUser = useSelector(selectors.selectAuthUser);
  const isUserLoggedIn = useSelector(selectors.selectIsLoggedIn);
  return (
    <>
      {isUserLoggedIn ? (
        <>
          <NavLink to="/notes" className="nav-item">
            {t('notesTitle')}
          </NavLink>
          <NavLink to="/wishlist" className="nav-item">
            {t('wishlistTitle')}
          </NavLink>
          <NavLink to="/classroom" className="nav-item">
            {t('classroomTitle')}
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
      <NavLink to="/covid19" className="nav-item">
        {t('covid19Title')}
      </NavLink>
      <NavLink to="/air-quality" className="nav-item">
        {t('airQualityTitle')}
      </NavLink>
      <NavLink to="/ambulances" className="nav-item">
        {t('ambulancesTitle')}
      </NavLink>
      {/* <NavLink to="/settings" className="nav-item">
        {t('settings')}
      </NavLink> */}
      {isUserLoggedIn && (
        <NavLink to="/sign-out" className="nav-item">
          {t('signOut')}
        </NavLink>
      )}
      {!isUserLoggedIn && (
        <NavLink to="/sign-in" className="nav-item">
          {t('signIn')}
        </NavLink>
      )}
    </>
  );
}
