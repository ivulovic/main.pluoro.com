import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import useOnClickOutside from '@hooks/useOnClickOutside';
import { MenuOutline, Logo } from '@reactoso-ui';
import { FormattedMessage } from '@translations';

import NavLinks from './NavLinks';

import './style.scss';

export default function Header(): JSX.Element {
  const location = useLocation();
  const navbarRef = useRef() as any;
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    setIsNavbarOpen(false);
  }, [location]);

  useOnClickOutside(navbarRef, () => setIsNavbarOpen(false));
  const LogoWrapper = (): JSX.Element => (
    <div className="logo-wrapper">
      <Link to="/" className="logo-title">
        <Logo />
        <FormattedMessage id="appName" />
      </Link>
    </div>
  );
  const HamburgerMenu = (): JSX.Element => (
    <div onClick={(): void => setIsNavbarOpen(!isNavbarOpen)} className="nav-icon mobile">
      <MenuOutline width={24} height={24} />
    </div>
  );
  return (
    <header className="header">
      <div className="header-wrapper">
        <LogoWrapper />
        <div className="nav-wrapper">
          <NavLinks />
        </div>
        <HamburgerMenu />
        <div className={`nav-wrapper mobile ${isNavbarOpen ? 'opened' : 'closed'}`} ref={navbarRef}>
          <div className="nav-header">
            <HamburgerMenu />
            <FormattedMessage id="navigation" />
          </div>
          <NavLinks />
        </div>
      </div>
    </header>
  );
}
