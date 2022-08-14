import { Outlet } from 'react-router-dom';

import { useWishlistController } from '@controllers/app';
import Context from '@controllers/app/context';

import './style.scss';

export default function WishlistPage(): JSX.Element {
  const controller = useWishlistController();
  return (
    <Context.Provider value={controller}>
      <Outlet />
    </Context.Provider>
  );
}
